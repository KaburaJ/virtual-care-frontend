import React, { useState, useEffect, useRef } from 'react';
import './Diet.css';
import FirstTrimester from './FirstTrimester';
import SecondTrimester from './SecondTrimester';
import ThirdTrimester from './ThirdTrimester';
import Navbar from '../navbar/navbar';
import logo from '../images/logo-virtual.png';
import twitterpng from '../images/tw-removebg-preview.png';
import instagrampng from '../images/ig-removebg-preview.png';
import facebookpng from '../images/fb-removebg-preview.png';
import Pagination from './Pagination';
import ExerciseTips from './ExerciseTips';

const Diet = () => {
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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleExerciseClick = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
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
    const timerRef = useRef(null);
    const [names, setNames] = useState('');
    const [num, setNum] = useState(0);
    const [next, setNext] = useState('');
    const [circleAnimation, setCircleAnimation] = useState('none');
    const [circleColor, setCircleColor] = useState('#0ac');
    const [isRest, setIsRest] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [shouldLoop, setShouldLoop] = useState(false);
    const [numex, setNumex] = useState(0);
    const [sec, setSec] = useState(30);
    const [iframeLoading, setIframeLoading] = useState(true);

    const handleIframeLoad = () => {
        setIframeLoading(false);
    };
    const ex = [
        ["Squats", 30, 5],
        ["Dynamic Harmstring", 30, 5],
        ["Quad Stretch", 30, 5],
        ["Harmstring helpers", 30, 5],
        ["Knee hugs", 30, 5],
        ["Side lunges", 30, 5]
    ];

    const ding = new Audio('https://res.cloudinary.com/ruwett/video/upload/v1661189199/Timer/reception-bell-14620_jl73p4.mp3');

    useEffect(() => {
        setNames(ex[0][0]);
        setNum(ex[0][1]);
        setNext(ex[1][0]);
        setSec(ex[0][1]);
    }, []);

    const startTimer = (name, tim) => {
        console.log(`starting timer of ${tim}s for ${name} (ex n. ${numex + 1})`);
        setIsPaused(false);
        setNames(name);
        setNum(sec);

        if (shouldLoop) {
            setNext((numex + 1 < ex.length) ? ex[numex + 1][0] : ex[0][0]);
        } else {
            setNext((numex + 1 < ex.length) ? ex[numex + 1][0] : '');
        }

        const timer = setInterval(() => {
            if (isPaused) {
                clearInterval(timer);
            } else {
                if (sec > 0) {
                    setSec(sec => sec - 1);
                    setNum(sec => sec - 1);
                } else {
                    clearInterval(timer);
                    ding.play();
                    if (numex + 1 < ex.length) {
                        if (!isRest) {
                            setIsRest(true);
                            setSec(ex[numex][2]);
                            startTimer("Rest", ex[numex][2]);
                        } else {
                            setIsRest(false);
                            setNumex(numex + 1);
                            setSec(ex[numex + 1][1]);
                            startTimer(ex[numex + 1][0], ex[numex + 1][1]);
                        }
                    } else if (numex + 1 === ex.length && shouldLoop) {
                        if (!isRest) {
                            setIsRest(true);
                            setSec(ex[numex][2]);
                            startTimer("Rest", ex[numex][2]);
                        } else {
                            setIsRest(false);
                            setNumex(0);
                            setSec(ex[0][1]);
                            startTimer(ex[0][0], ex[0][1]);
                        }
                    } else {
                        resetTimer();
                    }
                }
            }
        }, 1000);

        timerRef.current = timer;
    };

    const pauseTimer = () => {
        setIsPaused(true);
        setCircleAnimation('pulse');
        setCircleColor('#acc');
    };

    const resetTimer = () => {
        setIsPaused(true);
        setNumex(0);
        setSec(ex[0][1]);
        setNames(ex[0][0]);
        setNum(ex[0][1]);
        setNext(ex[1][0]);
        setCircleAnimation('none');
        setCircleColor('#0ac');
    };

    const setLoop = () => {
        setShouldLoop(!shouldLoop);
    };

    const starter = () => {
        startTimer(ex[numex][0], sec);
        setCircleAnimation('none');
        setCircleColor('#0ac');
    };

    return (
        <>
            <Navbar />
            <div>
                {/* <div style={{ display: "flex", flexDirection: "row", height: "45px", width: "55%", gap: "20px", paddingLeft: "45%", paddingTop: "5px", paddingBottom: "2px", backgroundColor: "#F9F9F9" }}>
                    <p onClick={handleExercisePlanClick} style={{ cursor: "pointer" }}>Exercise Plan</p>
                    <p onClick={handleDietPlanClick} style={{ cursor: "pointer" }}>Diet Plan</p>
                </div> */}
                <div className='pregnancy-section'>
                        <header className='pregnancy-nav' >
                            <h3 onClick={handleExercisePlanClick} className={`nav-item ${clicked === 'Exercise' ? 'active' : ''}`}>Exercise</h3>
                            <h3 onClick={handleDietPlanClick} className={`nav-item ${clicked === 'Diet' ? 'active' : ''}`}>Diet</h3>
                        </header>
                    </div>
                
                {clicked && clicked === "Exercise" ? <ExerciseTips onExerciseClick={handleExerciseClick} /> : (
                    <>
                        <div className='rect' style={{ backgroundColor: "white", width: "200px", height: "50px", position: "absolute", background: "linear-gradient(to bottom, #f7f7f7 0%,#e3e3e3 100%)" }}></div>
                        <div className='rect1' style={{ backgroundColor: "white", width: "180px", height: "50px", marginLeft: "85.4%", position: "absolute", background: "linear-gradient(to bottom, #f7f7f7 0%,#e3e3e3 100%)" }}></div>
                        <div className='rect2' style={{ backgroundColor: "#E6F0F2", width: "60px", height: "300px", marginTop: "9%", marginLeft: "94.32%", position: "absolute", background: "linear-gradient(to bottom, #E6F0F2 0%,#E6F0F2 100%)" }}></div>
                        <div>
                            <iframe
                                title="Embedded EJS App"
                                src="https://www.edamam.com/results/recipes/?search=salad" 
                                className="embedded-iframe"
                            />
                        </div>
                    </>
                )}

                {isModalVisible && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-modal" onClick={closeModal}>Close</button>
                            <div id="wrap">
                                <button id="start" onClick={starter}>
                                    <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/play-icon_rgtkbf.png" alt="Start" />
                                </button>
                                <button id="pause" onClick={pauseTimer}>
                                    <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/pause-icon_mntpll.png" alt="Pause" />
                                </button>
                                <button id="reset" onClick={resetTimer}>
                                    <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/reset-icon_znemse.png" alt="Reset" />
                                </button>
                                <div id="loop" onClick={setLoop}>
                                    <img src="https://res.cloudinary.com/ruwett/image/upload/v1661189038/Timer/loop-lever_urcgjj.png" />
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
                )}
            </div>
        </>
    );
};

export default Diet;
