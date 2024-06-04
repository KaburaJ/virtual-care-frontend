import React, { useState, useEffect, useRef } from 'react';
import './TimerModal.css'; // Create a CSS file for styling the modal
import FirstTrimester from './FirstTrimester';
import SecondTrimester from './SecondTrimester';
import ThirdTrimester from './ThirdTrimester';

const TimerModal = ({ exercise, closeModal }) => {
    // State variables
    const [sec, setSec] = useState(30);
    const [isPaused, setIsPaused] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const timerRef = useRef(null);

    useEffect(() => {
        if (!isPaused && sec > 0) {
            timerRef.current = setInterval(() => {
                setSec((prevSec) => prevSec - 1);
            }, 1000);
        } else if (sec === 0) {
            closeModal();
        }

        return () => clearInterval(timerRef.current);
    }, [isPaused, sec]);

    const startTimer = () => {
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
    };

    const resetTimer = () => {
        setIsPaused(true);
        setSec(30); // or any initial value you want
    };

    // Additional state variables for the rest of your functionality
    const [trimester, setTrimester] = useState('first');
    const [formData, setFormData] = useState({
        height: '150',
        weight: '77',
        age: '30',
        gender: 'female',
        activityLevel: '1.55'
    });
    const [meals, setMeals] = useState([]);
    const [mealsFetched, setMealsFetched] = useState(false);
    const [mealRecipe, setMealRecipe] = useState({});
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDisplay, setRecipeDisplay] = useState(false);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [showRecipePopup, setShowRecipePopup] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [mealsPerPage] = useState(6);
    const apiKey = "7d5f8aeb59294e87951da3898fb3fcb1";
    const [clicked, setClicked] = useState("Exercise");

    const handleExerciseClick = () => {
        setIsModalVisible(true);
    };

    const closeModalHandler = () => {
        console.log("Close button clicked"); // Debugging
        setIsModalVisible(false);
        closeModal(); // Check if this is being called
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        document.getElementById(id).id = id.replace('Red', '');
    };

    const fetchMeals = async (bmr) => {
        try {
            console.log("Fetching meals...");
            const response = await fetch(`https://crossorigin.me/https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=15`);
            const data = await response.json();
            console.log("Fetched meals:", data.results);
            setMeals(data.results);
            localStorage.setItem('meals', JSON.stringify(data.results));
        } catch (error) {
            console.error("Something went wrong with fetching meals:", error);
        }
    };

    const fetchRecipe = async (mealId) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${mealId}/information?apiKey=7d5f8aeb59294e87951da3898fb3fcb1`, {
                credentials: 'include'
            });
            const data = await response.json();
            setMealRecipe((prev) => ({ ...prev, [mealId]: data }));
            return data;
        } catch (error) {
            console.error("Something went wrong with fetching the recipe:", error);
        }
    };

    const generateMeals = async (e) => {
        e.preventDefault();
        const { height, weight, age, gender, activityLevel } = formData;

        if (!height || !weight || !age || !gender || !activityLevel) {
            if (!height) document.getElementById("height").id = "heightRed";
            if (!weight) document.getElementById("weight").id = "weightRed";
            if (!age) document.getElementById("age").id = "ageRed";
            if (!gender) document.getElementById("gender").id = "genderRed";
            if (!activityLevel) document.getElementById("activityLevel").id = "activityLevelRed";
            return;
        }

        let bmr;
        if (gender === "female") {
            bmr = 655.1 + (9.563 * Number(weight)) + (1.850 * Number(height)) - (4.676 * Number(age));
        } else {
            bmr = 66.47 + (13.75 * Number(weight)) + (5.003 * Number(height)) - (6.755 * Number(age));
        }
        bmr *= Number(activityLevel);

        setFormData({
            height: '',
            weight: '',
            age: '',
            gender: '',
            activityLevel: ''
        });

        setMeals([]);
        setMealsFetched(false);
        await fetchMeals(bmr);
    };

    const handleRecipeClick = async (mealId) => {
        setSelectedMealId(mealId);
        const recipeDetails = mealRecipe[mealId] || await fetchRecipe(mealId);
        if (recipeDetails) {
            setRecipeList(recipeDetails.extendedIngredients);
            setShowRecipePopup(true);
        }
    };

    const closeRecipePopup = () => {
        setShowRecipePopup(false);
    };

    useEffect(() => {
        const storedMeals = localStorage.getItem('meals');
        if (storedMeals) {
            try {
                const parsedMeals = JSON.parse(storedMeals);
                if (Array.isArray(parsedMeals) && parsedMeals.length > 0) {
                    setMeals(parsedMeals);
                } else {
                    fetchMeals();
                }
            } catch (error) {
                console.error("Error parsing stored meals:", error);
                fetchMeals();
            }
        } else {
            fetchMeals();
        }
    }, []);

    const indexOfLastMeal = currentPage * mealsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderTrimesterContent = () => {
        switch (trimester) {
            case 'first':
                return <FirstTrimester />;
            case 'second':
                return <SecondTrimester />;
            case 'third':
                return <ThirdTrimester />;
            default:
                return <FirstTrimester />;
        }
    };

    const handleExercisePlanClick = () => {
        setClicked("Exercise")
    }

    const handleDietPlanClick = () => {
        setClicked("Diet")
    }

    // Timer Logic
    const ex = [
        ["Squats", 30, 5],
        ["Dynamic Hamstring", 30, 5],
        ["Quad Stretch", 30, 5],
        ["Hamstring helpers", 30, 5],
        ["Knee hugs", 30, 5],
        ["Side lunges", 30, 5]
    ];

    const ding = new Audio('https://res.cloudinary.com/ruwett/video/upload/v1661189199/Timer/reception-bell-14620_jl73p4.mp3');

    const [names, setNames] = useState(ex[0][0]);
    const [num, setNum] = useState(ex[0][1]);
    const [next, setNext] = useState(ex[1][0]);
    const [circleAnimation, setCircleAnimation] = useState('none');
    const [circleColor, setCircleColor] = useState('#0ac');
    const [isRest, setIsRest] = useState(false);
    const [isPausedTimer, setIsPausedTimer] = useState(true);
    const [shouldLoop, setShouldLoop] = useState(false);
    const [numex, setNumex] = useState(0);
    const [secTimer, setSecTimer] = useState(ex[0][1]);

    const startExerciseTimer = (name, tim) => {
        // console.log(`Starting timer of ${tim}s for ${name} (exercise n. ${numex + 1})`);
        setIsPausedTimer(false);
        setNames(name);
        setNum(tim);
    
        if (shouldLoop) {
            setNext((numex + 1 < ex.length) ? ex[numex + 1][0] : ex[0][0]);
        } else {
            setNext((numex + 1 < ex.length) ? ex[numex + 1][0] : '');
        }
    
        const timer = setInterval(() => {
            if (isPausedTimer) {
                clearInterval(timer);
            } else {
                if (tim > 0) {
                    setSecTimer((sec) => sec - 1);
                    setNum((num) => num - 1);
                } else {
                    clearInterval(timer);
                    ding.play();
                    if (numex + 1 < ex.length) {
                        if (!isRest) {
                            setIsRest(true);
                            setSecTimer(ex[numex][2]);
                            startExerciseTimer("Rest", ex[numex][2]);
                        } else {
                            setIsRest(false);
                            setNumex(numex + 1);
                            setSecTimer(ex[numex + 1][1]);
                            startExerciseTimer(ex[numex + 1][0], ex[numex + 1][1]);
                        }
                    } else if (numex + 1 === ex.length && shouldLoop) {
                        if (!isRest) {
                            setIsRest(true);
                            setSecTimer(ex[numex][2]);
                            startExerciseTimer("Rest", ex[numex][2]);
                        } else {
                            setIsRest(false);
                            setNumex(0);
                            setSecTimer(ex[0][1]);
                            startExerciseTimer(ex[0][0], ex[0][1]);
                        }
                    } else {
                        resetExerciseTimer();
                    }
                }
            }
        }, 1000);
    
        timerRef.current = timer;
    };
    
    const pauseExerciseTimer = () => {
        console.log("Pause button clicked"); // Debugging
        setIsPausedTimer(prevPaused => !prevPaused); // Toggle the pause state
        setCircleAnimation('pulse');
        setCircleColor('#acc');
    };
    
    const startExercise = () => {
        console.log("Start button clicked"); // Debugging
        startExerciseTimer(ex[numex][0], secTimer);
        setCircleAnimation('none');
        setCircleColor('#0ac');
    };   
    

    const resetExerciseTimer = () => {
        setIsPausedTimer(true);
        setNumex(0);
        setSecTimer(ex[0][1]);
        setNames(ex[0][0]);
        setNum(ex[0][1]);
        setNext(ex[1][0]);
        setCircleAnimation('none');
        setCircleColor('#0ac');
    };

    const setLoop = () => {
        setShouldLoop(!shouldLoop);
    };


    useEffect(() => {
        console.log("isPausedTimer changed:", isPausedTimer); // Debugging
        if (!isPausedTimer && sec > 0) {
            timerRef.current = setInterval(() => {
                setSec((prevSec) => prevSec - 1);
            }, 1000);
        } else if (sec === 0) {
            closeModal();
        }
    
        return () => clearInterval(timerRef.current);
    }, [isPausedTimer, sec]);
    

    return (
        <div className="modal">
            <div className="modal-content" style={{height:"50vh"}}>
                <button className="close-modal" onClick={closeModalHandler}>Close</button>
                <div id="wrap" style={{marginTop:"-160px"}}>
                    <button id="start" onClick={startExercise}>
                        <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/play-icon_rgtkbf.png" alt="Start" />
                    </button>
                    <button id="pause" onClick={pauseExerciseTimer}>
                        <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/pause-icon_mntpll.png" alt="Pause" />
                    </button>
                    <button id="reset" onClick={resetExerciseTimer}>
                        <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/reset-icon_znemse.png" alt="Reset" />
                    </button>
                    <div id="loop" onClick={setLoop}>
                        <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/loop-lever_urcgjj.png" alt="Loop" />
                    </div>
                    <div id="timer-body" />
                    <div id="timer-hole-light" />
                    <div id="screen">
                        <div id="screen-light" />
                        <div id="name">{names}</div>
                        <div id="next">
                            next: <span id="nextes">{next}</span>
                        </div>
                    </div>
                    <div id="circle" style={{ animationName: circleAnimation, backgroundColor: circleColor }}>
                        <p id="time">{num}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerModal;
