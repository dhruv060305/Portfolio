import React, { useEffect, useState } from 'react';
import PP from '../Assets/Snapchat-1351010918.jpg';
import vidieo from '../Assets/Project1.mp4'
import '../App.css';

// import ShinyText from './ShinyText';

export default function Main(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <section className="container text-light py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="fw-bold ">{props.cardTitle}</h1>
                        <p className="text TEXT">
                            {props.cardText}
                        </p>

                    </div>


                    <div className="col-lg-6 text-center mt-4 mt-lg-0">
                        <img
                            src={PP}
                            alt="Profile"
                            className="rounded img-fluid"
                            style={{}}
                        />
                    </div>
                </div>
            </section>


            <section className="container py-5">
                {/* Header Section */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold mt-3">Projects</h2>
                    <p className="text TEXT w-75 mx-auto">
                        All the projects that i have made <br />
                    </p>
                </div>

                {/* Case Study 1 */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-6">
                        <div className="mt-0">
                            <div className="video-wrapper">
                                <video controls autoPlay muted loop playsInline className="video rounded">
                                    <source src={vidieo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 text-center text-md-start">
                        <span className="badge bg-warning mb-2">Frontend</span>
                        <h4 className="fw-bold">Amazon Clone</h4>
                        <p className="text">
                        This the 1st clone I have made at the Starting of my frontend developer. It's just a normal clone build using HTML and CSS only
                        </p>
                        <a href="https://github.com/dhruv060305/Amazon.clon?tab=readme-ov-file" className="btn btn-warning">View Project →</a>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-6 order-md-2">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="EdTech Work"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <span className="badge bg-primary mb-2">EdTech</span>
                        <h4 className="fw-bold">Work name here</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn btn-primary">View case study →</button>
                    </div>
                </div>

                {/* Case Study 3 */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-6">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="Pharma Work"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <span className="badge bg-success mb-2">Pharma</span>
                        <h4 className="fw-bold">Work name here</h4>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="btn btn-success">View case study →</button>
                    </div>
                </div>
            </section>


        </>
    );
}