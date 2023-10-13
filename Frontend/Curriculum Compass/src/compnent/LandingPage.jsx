import React from 'react'
import Navbar from './navbar.jsx'
import '../css/landing.css'
const LandingPage = () => {
  return (
      <>
      <Navbar/>
      <div className="land">
      <div className="img">
          <div className="firstText">
              <p>
          Empowering Education, Crafting Futures: 
           Your Path to Innovative Curriculum Design
           </p>
           <button className="btn">Quick Start</button>
          </div>
      </div>
      <div className="desgin">
          <div className="text">
              <h3>WHAT IS CURRICULUM DESIGN?</h3>
              Curriculum design focuses on the creation of the overall course blueprint, mapping content to learning objectives, including how to develop a course outline and build the course. Each learning objective is met with assessment strategies, exercises, content, subject matter analysis, and interactive activities.

          </div>
          <div className="imageD">
           <img src="https://img.freepik.com/free-vector/online-certification-concept_23-2148575665.jpg?w=740&t=st=1696310512~exp=1696311112~hmac=1c208deb04a2d0f7fa0b576a477aef0cd4d48114940141f792ec1bf1cbceea0d" alt="" />
          </div>
      </div>


      <div className="compass">
          <h2>Curriculum Compaas</h2>
          <p> A unified portal is required to collaborate with educational experts, curriculum designers to provide the functionality and design a model curriculum for all the Institutes.</p>
      
      <div className="features">
          <div className="feature">
              <div className="imageF"> <img src="" alt="" /></div>
              <h4>Roadmap Based devlopment</h4>
          </div>
          <div className="feature">
          <div className="imageF"><img src="" alt="" /></div>
              <h4>Real time  Collaboration</h4>
          </div>
          
          <div className="feature">
          <div className="imageF"><img src="" alt="" /></div>
          <h4>Curriculum Evaluation</h4>
          </div>
      </div>
      </div>


      <div className="org">
          <div className="ailogo">

          </div>
          <div className="organ">
          <h2>Organistion</h2>
          <p>The AICTE Act was constituted to provide for the establishment of an All India Council for Technical Education with a view to proper planning and co-ordinated development of a technical education system throughout the country, the promotion of qualitative improvements of such education in relation to planned quantitative growth, and regulation & proper maintenance of norms and standards in the technical education system and for the matters connected therewith.</p>

          <button className="btn">Know More</button>
          </div>
      </div>

      <div className="contact">
          <h3>Contact Us</h3>
          <p>Head Office :Nelson Mandela Marg,Vasant Kunj, New Delhi-110070 <br />
             Phone: 011-26131576-78,80 <br />

             Email : xyz@gmail.com</p>
      </div>
      </div>
      </>
  )
}

export default LandingPage