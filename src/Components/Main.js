import React, { useEffect, useState } from 'react';
import PP from '../Assets/Snapchat-1351010918.jpg';
import '../App.css';

// import ShinyText from './ShinyText';

export default function Main(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);
    

    return (
        <>
            <section className="container PRO text-light py-5">
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


            

        </>
    );
}