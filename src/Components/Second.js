import React from 'react'

export default function Second(props) {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
            <h2>Education</h2>
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'>B.Tech | Bharati Vidyapeeth Deemed University|Navi Mumbai</h4><br/>
                        <p className='card-text'>{props.text}</p>
                    </div>
                </div>

                
                <div className="card my-2">
                    <div className="card-body">
                        <h4 className='card-title'>12th | Indian Model School | Navi Mumbai </h4><br/>
                        <p className='card-text'>{props.text2}</p>
                    </div>
                </div>
                

                

            </div>
        </div>
    )
}
