import React, { useEffect, useState } from 'react';
import '../ProfileCard.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Plotly from 'plotly.js/lib/core'; 
import createPlotlyComponent from 'react-plotly.js/factory'; 
import axios from 'axios';

const Plot = createPlotlyComponent(Plotly);

export const Overview = ({ userDetails }) => {
    console.log("USERDETAILS: ", userDetails);
  const [pregnancyDetails, setPregnancyDetails] = useState("");

  const handlePregnancyOverview = async (userDetails) => {
    try {
      const response = await axios.post('http://localhost:5003/user/details', {
        UserID: userDetails.UserID
      }, {
        withCredentials: true
      });
  
      console.log("data:", response);
      setPregnancyDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  

  useEffect(() => {
    handlePregnancyOverview(userDetails);
  }, [userDetails]);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleNoClick = () => {
    setIsClicked(false);
  };

    return (
        <div>
            <div className='due-date'>
                <h3 className='weeks-left'>46</h3>
                <div className='date-due'>
                    <p style={{ display: 'flex', gap: "10px", fontWeight: "bold" }}>Due Date: </p>
                    {isClicked ? (
                        <input style={{ marginTop: "-.1em", fontWeight: "bold", color: "#EC417A" }} onClick={() => handleNoClick()}></input>
                    ):(
                    <p style={{ marginTop: "-.1em", fontWeight: "bold", color: "#EC417A" }} onClick={() => handleClick()}>{pregnancyDetails.DueDate}</p>
                    )}
                    <p>46 weeks left</p>
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
                        <h3>{pregnancyDetails.StartWeight}</h3>
                        <p>Start Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>{pregnancyDetails.CurrentWeight}</h3>
                        <p>Current Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>{pregnancyDetails.GainedWeight}</h3>
                        <p>Gained Weight</p>
                    </div>
                </div>
                <div className='see-all'><p>See all info</p> <FontAwesomeIcon className="see-all-icon" style={{ marginTop: "18px" }} icon={faAngleRight} /></div>
            </div>

            <div className='info-plot'>
                <Plot
                    data={[
                        {
                            x: ['March, 2023', 'December, 2023'],
                            y: [pregnancyDetails.StartWeight, pregnancyDetails.CurrentWeight],
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
                        yaxis: {
                            title: "Weight (kg)",

                        },
                    }}
                />

            </div>

        </div>

    )
}
