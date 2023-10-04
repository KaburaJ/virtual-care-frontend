import React from 'react'
import '../ProfileCard.css'
import { faAngleRight, faGear, faLock, faLockOpen, faPaintBrush, faPaintRoller, faPalette, faPallet, faPersonPregnant, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Plotly from 'plotly.js/lib/core'; // Import the Plotly core module
import createPlotlyComponent from 'react-plotly.js/factory'; // Import the React Plotly component

const Plot = createPlotlyComponent(Plotly);



export const Overview = () => {

    return (
        <div>
            <div className='due-date'>
                <h3 className='weeks-left'>46</h3>
                <div className='date-due'>
                    <p style={{ display: 'flex', gap: "10px", fontWeight: "bold" }}>Due Date: <p style={{ marginTop: "-.1em", fontWeight: "bold", color: "#EC417A" }}>17th March, 2024</p></p>
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
                        <h3>84 Kgs</h3>
                        <p>Start Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>90 Kgs</h3>
                        <p>Current Weight</p>
                    </div>
                    <div className='weight-main-info'>
                        <h3>6 Kgs</h3>
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
                            y: [84, 90],
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
