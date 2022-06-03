import React from 'react'
import videoLgBg from '../assets/lg.mp4';
import videoSmBg from '../assets/mb.mp4';

export default function Prism() {
    return (
        <div className='main'>
            <video autoPlay muted loop id='myVideo' src={videoLgBg}>
            </video>
            <video autoPlay muted loop id='myMb' src={videoSmBg}>
            </video>

            <div className="content">
                <h1>prism</h1>
                <p>Example tagline can go here</p>
                <a href="http://www.google.com/">
                    <span className="bullet"></span>
                    <span>
                        enter now
                    </span>
                </a>
            </div>
        </div>
    )
}
