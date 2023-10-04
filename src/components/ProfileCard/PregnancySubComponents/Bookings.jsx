import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Bookings = () => {
    return (
        <div className='bookings' style={{ marginBottom: "50px" }}>
            <div className='booking'>
                <h3>Yoga Village Week 3</h3>
                <p>24th May, 2023</p>
                <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className='booking'>
                <h3>Cardio Tuesdays</h3>
                <p>24th May, 2023</p>
                <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className='booking'>
                <h3>The Morning Stretch</h3>
                <p>24th May, 2023</p>
                <FontAwesomeIcon icon={faCheck} />
            </div>
        </div>
    )
}
