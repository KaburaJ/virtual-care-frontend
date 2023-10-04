import React from 'react'
import '../ProfileCard.css'
import img from '../../images/pexels-thiago-borges-1765353.jpg'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Images = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: ' 20px' }}>
            <div className='upload' style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <label for="file" className="file">
                    <h3>
                        <FontAwesomeIcon icon={faUpload} style={{ marginRight: "1em" }} />Choose file
                    </h3>
                </label>
                <input type="file" id="file" aria-label="File browser" style={{display:"none"}}/>
                <button type='submit' style={{marginLeft:"21.5em"}}>Submit</button>
            </div>
            {/* <h3 style={{ fontWeight: "normal", marginTop: "4em" }}></h3> */}
            <div className='gallery' style={{ marginTop: "1em", marginBottom:"50px" }}>
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
                <img src={img} alt='your-gallery-image' />
            </div>
        </div>

    )
}
