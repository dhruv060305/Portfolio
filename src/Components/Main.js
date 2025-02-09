import React,{ useEffect, useState } from 'react'
import PP from './Snapchat-1351010918.jpg';
import "../App.css"; // Import CSS file

export default function Main(props) {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
      }, []);

    return (
        <div>

            <div className="card mb-3 my-3 shadow p-3 mb-5 bg-white rounded" style={props.style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PP} className="img-fluid rounded my-4" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className={`card-title animated-text ${animate ? "fade-in-up" : ""}`}>{props.cardTitle}</h3>
                            <p className={`card-text animated-text ${animate ? "fade-in-up" : ""}`}>
                                
                                {props.cardText}
                                                        
                            </p>
                            <p className={`card-text animated-text ${animate ? "fade-in-up" : ""}`}> <a href="https://www.linkedin.com/in/dhruv-taraviya-103010349/" target="_blank" rel="noopener noreferrer">
                                Visit My LinkedIn
                            </a></p>

                            <p className={`card-text animated-text ${animate ? "fade-in-up" : ""}`}> <a href="https://github.com/dhruv060305" target="_blank" rel="noopener noreferrer">
                                Visit My GitHub
                            </a></p>

                            <p className="card-text"><small className="text-body-secondary"></small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
