import React from 'react'
import"../App.css"

export default function Nav(props) {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg  custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/Projects">Projects</a>
                            <a className="nav-link" href="/Skills">Skills</a>
                            <a className="nav-link" href="/Exp">Expirence</a>
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
