import React, { useState, useEffect, useRef } from 'react';
import './ExerciseTips.css';
import TimerModal from './TimerModal'; // Import the TimerModal component

import curl from "../images/curl.jpeg";
import curls from "../images/curls.jpeg";
import brace from "../images/brace.jpeg";
import pushups from "../images/pushups.jpeg";
import plank from "../images/plank.jpeg";
import sit from "../images/sit.jpeg";
import squats from "../images/squats.jpeg";
import lunges from "../images/lunges.jpeg";
import dog from "../images/dog.jpeg";
import extensions from "../images/extensions.jpeg";

const ExerciseTips = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [videosLoaded, setVideosLoaded] = useState(false); // State to track if videos are loaded
    const [loading, setisLoading] = useState(true);
    const handleExerciseClick = (exercise) => {
        setSelectedExercise(exercise);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedExercise(null);
    };

    useEffect(() => {
        // Simulating fetch delay with setTimeout
        const timer = setTimeout(() => {
            setisLoading(false); // Set loading to false after timeout
        }, 2000);

        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const videoLoadTimer = setTimeout(() => {
            if (!videosLoaded) {
                setisLoading(true); // Show loader if videos take too long to load
            }
        }, 10000); // Adjust timeout duration as needed

        return () => clearTimeout(videoLoadTimer);
    }, [videosLoaded]);

    const handleVideoLoad = () => {
        setVideosLoaded(true);
        setisLoading(false);
    };

    const exercises = [
        { category: "1", name: 'Pelvic Curl', url: "https://www.youtube.com/embed/Ia6dNwVs1M8?si=vU-sGEVCLBua4Qe7" },
        { category: "1", name: 'Pelvic Brace', url: "https://www.youtube.com/embed/RxdbTOkjPBM?si=REWL__IoZg9vBa11" },
        { category: "1", name: 'Squats', url: "https://www.youtube.com/embed/Ye7EeOtL2u8?si=rWZtMpEWzraWU8gs" },
        { category: "1", name: 'Bicep Curls', url: "https://www.youtube.com/embed/4N4xUOwZVLM?si=GiXsVp16lN8IuZcl" },
        { category: "1", name: 'Wall-Sit', url: "https://www.youtube.com/embed/uyFqgK5U03c?si=zxfDHg9LO02hXQL5" },
    ];

    const exercises1 = [
        { name: 'Forward Lunges', url: "https://www.youtube.com/embed/3VHnnpBJVsk?si=EBXIQqg6ogEwJwVQ" },
        { name: 'Plank', url: "https://www.youtube.com/embed/qJ3L-YztHog?si=-7RjYDns_lLFMWk3" },
        { name: 'Leg Extensions', url: "https://www.youtube.com/embed/-jtcA7ZjTAU?si=Sc9Tfs4EKCW7A9L2" },
        { name: 'Plank', url: "https://www.youtube.com/embed/0ZgHkOWk-_8?si=kZjFB9kzyraRYFs9" },
        { name: 'Leg Extensions', url: "https://www.youtube.com/embed/D75ClMK09TA?si=TADQz9AT-ZwqRGo_" },
    ];

    const exercises2 = [
        { name: 'Plank1', url: "https://www.youtube.com/embed/qJ3L-YztHog?si=-7RjYDns_lLFMWk3" },
        { name: 'Leg Extensions1', url: "https://www.youtube.com/embed/BpkYg2EclBA?si=6LRuy7wmVighUU0J" },
        { name: 'Leg Extensions11', url: "https://www.youtube.com/embed/pxACsE_bH-Y?si=bhKkUHrLP2aHfj39" },
        { name: 'Bird Dog11', url: "https://www.youtube.com/embed/pxACsE_bH-Y?si=B3bPujsTemT-oci9" },
        { name: 'Bird Dog111', url: "https://www.youtube.com/embed/Ilg-gQY2Rxc?si=gN_bDZbqNPyFRy1r" },
        { name: 'Bird Dog11', url: "https://www.youtube.com/embed/Cc_vRDbp7JE?si=Xtc2VmqGaXLfLnsM" },
        { name: 'Bird Dog111', url: "https://www.youtube.com/embed/Ilg-gQY2Rxc?si=gN_bDZbqNPyFRy1r" },
        { name: 'Bird Dog1', url: "https://www.youtube.com/embed/-iyIlAWRL_s?si=dbvnLIxT_GeBy3Ro" },
        { name: 'Bird Dog11', url: "https://www.youtube.com/embed/Ilg-gQY2Rxc?si=gN_bDZbqNPyFRy1r" },
    ]

    return (
        <div className="exercise-tips">
            {loading ? ( // Activity indicator (loader)
                <div className="loader">Loading...</div>
            ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"20px" }}>
            <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
            <h4>First Trimester Exercises</h4>
                {exercises.map((exercise) => (
                    <div key={exercise.name} onClick={() => handleExerciseClick(exercise.name)}>
                        <iframe width="400" height="315" src={exercise.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                ))}
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <h4>Second Trimester Exercises</h4>
                {exercises1.map((exercise1) => (
                    <div key={exercise1.name} onClick={() => handleExerciseClick(exercise1.name)}>
                        <iframe width="400" height="315" src={exercise1.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                ))}</div>
                <div style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <h4>Third Trimester Exercises</h4>
                {exercises2.map((exercise2) => (
                    <div key={exercise2.name} onClick={() => handleExerciseClick(exercise2.name)}>
                        <iframe width="400" height="315" src={exercise2.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                ))}</div>
            </div>)}
            {isModalVisible && <TimerModal exercise={selectedExercise} closeModal={closeModal} />}
        </div>
    );
};

export default ExerciseTips;
