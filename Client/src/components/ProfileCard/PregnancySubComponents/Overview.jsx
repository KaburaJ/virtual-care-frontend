import React, { useEffect, useState } from 'react';
import '../ProfileCard.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Plotly from 'plotly.js/lib/core';
import createPlotlyComponent from 'react-plotly.js/factory';
import axios from 'axios';

const Plot = createPlotlyComponent(Plotly);

export const Overview = ({ userDetails }) => {
    const [pregnancyDetails, setPregnancyDetails] = useState({
        DueDate: "",
        StartWeight: 0,
        CurrentWeight: 0,
        GainedWeight: 0,
        WeeksLeft: 0
    });

    const [weightHistory, setWeightHistory] = useState([]);

    const handlePregnancyOverview = async (userDetails) => {
        try {
            const response = await axios.post('http://localhost:5003/user/details', {
                UserID: userDetails.UserID
            }, {
                withCredentials: true
            });

            setPregnancyDetails(response.data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    useEffect(() => {
        const dueDate = localStorage.getItem('DueDate');
        const startWeight = localStorage.getItem('StartWeight');
        const currentWeight = localStorage.getItem('CurrentWeight');
        const weightHistory = JSON.parse(localStorage.getItem('WeightHistory')) || [];

        if (dueDate && startWeight && currentWeight) {
            const dueDateObj = new Date(dueDate);
            const currentDate = new Date();
            const timeDifference = dueDateObj - currentDate;
            const weeksLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24 * 7));
            const gainedWeight = currentWeight - startWeight;

            setPregnancyDetails({
                DueDate: dueDate,
                StartWeight: parseFloat(startWeight),
                CurrentWeight: parseFloat(currentWeight),
                GainedWeight: gainedWeight,
                WeeksLeft: weeksLeft
            });

            setWeightHistory(weightHistory);
        }
    }, [userDetails]);

    const [isClicked, setIsClicked] = useState(false);
    const [weightInput, setWeightInput] = useState(pregnancyDetails.CurrentWeight);

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleNoClick = () => {
        setIsClicked(false);
    };

    const handleWeightChange = (event) => {
        setWeightInput(event.target.value);
    };

    const handleWeightUpdate = () => {
        const updatedWeight = parseFloat(weightInput);
        const newWeightHistory = [...weightHistory, { weight: updatedWeight, date: new Date().toLocaleDateString() }];
        
        if (newWeightHistory.length > 50) {
            newWeightHistory.shift();
        }

        localStorage.setItem('CurrentWeight', updatedWeight);
        localStorage.setItem('WeightHistory', JSON.stringify(newWeightHistory));

        const startWeight = parseFloat(localStorage.getItem('StartWeight'));
        const gainedWeight = updatedWeight - startWeight;

        setPregnancyDetails((prevDetails) => ({
            ...prevDetails,
            CurrentWeight: updatedWeight,
            GainedWeight: gainedWeight,
        }));

        setWeightHistory(newWeightHistory);
    };

    return (
        <div>
            <div className='due-date'>
                <h3 className='weeks-left' style={{ width: "40px", height: "40px" }}>{pregnancyDetails.WeeksLeft} <p style={{ marginLeft: "-10px" }}>weeks</p></h3>
                <div className='date-due'>
                    <p style={{ display: 'flex', gap: "10px", fontWeight: "bold" }}>Due Date: </p>
                    {isClicked ? (
                        <input
                            style={{ marginTop: "-.1em", fontWeight: "bold", color: "#EC417A" }}
                            onClick={() => handleNoClick()}
                            defaultValue={pregnancyDetails.DueDate}
                        />
                    ) : (
                        <p
                            style={{ marginTop: "-.1em", fontWeight: "bold", color: "#EC417A" }}
                            onClick={() => handleClick()}
                        >
                            {pregnancyDetails.DueDate}
                        </p>
                    )}
                </div>
                <FontAwesomeIcon className='forward-icon' icon={faAngleRight} />
            </div>
            <div className='weight-info'>
                <div className='weight-header'>
                    <h3 style={{ fontWeight: "lighter" }}>My Weight</h3>
                    <h3 style={{ fontWeight: "lighter" }}>Updated on March 2023</h3>
                </div>
                <div className='weight-main'>
                    <div className='weight-main-info'>
                        <h3>{pregnancyDetails.StartWeight} kg</h3>
                        <p>Start Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>{pregnancyDetails.CurrentWeight} kg</h3>
                        <p>Current Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>{pregnancyDetails.GainedWeight} kg</h3>
                        <p>Gained Weight</p>
                    </div>
                </div>
                <div className='weight-update'>
                    <input
                        type="number"
                        value={weightInput}
                        onChange={handleWeightChange}
                    />
                    <button onClick={handleWeightUpdate}>Update Weight</button>
                </div>
            </div>
            <div className='info-plot'>
                <Plot
                    data={[
                        {
                            x: weightHistory.map(entry => entry.date),
                            y: weightHistory.map(entry => entry.weight),
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: '#EC417A' },
                        },
                    ]}
                    layout={{
                        width: 800,
                        height: 440,
                        title: "Your Weight's Progress Over Time",
                        titlefont: {
                            color: '#006983',
                        },
                        xaxis: {
                            title: 'Date',
                        },
                        yaxis: {
                            title: "Weight (kg)",
                        },
                    }}
                />
            </div>
        </div>
    );
};
