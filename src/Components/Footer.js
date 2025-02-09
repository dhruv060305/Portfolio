import React from 'react'

export default function Footer(props) {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <h2>Contact </h2>
            <div className="card my-2">
                <div className="card-body">
                    <p className='card-title'><i className="fa-solid fa-envelope fa-1x  "></i>: {props.email}</p>
                    <p><i className="fa-brands fa-instagram"></i>:{props.insta}</p>
                </div>
            </div>
        </div>
    )
}
