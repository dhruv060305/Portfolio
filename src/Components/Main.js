import React from 'react'
import PP from './Snapchat-1351010918.jpg';

export default function Main(props) {
    return (
        <div>

            <div className="card mb-3 my-3" style={props.style}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={PP} className="img-fluid rounded-start my-4" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.cardTitle}</h5>
                            <p className="card-text">
                                
                                {props.cardText}

                                {props.about} 
                                
                                
                            </p>
                            <p> <a href="https://www.linkedin.com/in/dhruv-taraviya-103010349/" target="_blank" rel="noopener noreferrer">
                                Visit My LinkedIn
                            </a></p>
                            <p className="card-text"><small className="text-body-secondary"></small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
