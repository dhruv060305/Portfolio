import React, { useState } from 'react'
import vidieo from '../Assets/Project1.mp4'
import vidieo1 from '../Assets/Project2.mp4'
import '../index.css'

export default function Projects() {

  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <section className="container PROJECT py-5">
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
          <div className="mt-0">
              <div className="video-wrapper">
                <video controls autoPlay muted loop playsInline className="video rounded">
                  <source src={vidieo1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <span className="badge bg-primary mb-2">Backend</span>
            <h4 className="fw-bold">Bank Manegment System</h4>
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
  )
}
