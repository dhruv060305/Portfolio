import React, { useState } from 'react'
import vidieo from '../Assets/Project1.mp4'
import '../index.css'

export default function Projects() {

  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <div>
        <div className="card my-2">
          <div className="card-header">
            Frontend Project
          </div>
          <div>
            <div className="card-body">
              <h5 className="card-title">Amazon Clone</h5>
              <p className="card-text">This the 1st clone I have made at the Starting of my frontend developer. It's just a normal clone build using HTML and CSS only</p>
              <a href="https://github.com/dhruv060305/Amazon.clon?tab=readme-ov-file" className="btn btn-primary">View Project</a>
              <button className='btn btn-primary ms-2' onClick={() => { setShowVideo(!showVideo) }}>{showVideo ? "Hide Preview" : "Preview"}</button>
            </div>




            {showVideo && (<div className="mt-0">
              <div className="video-wrapper">
                <video controls autoPlay muted loop playsInline className="video rounded">
                  <source src={vidieo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>)}
          </div>





        </div>
      </div>


    </>
  )
}
