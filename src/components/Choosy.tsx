import React from 'react'
import '../styles/components/Choosy.css';
import person from '../assets/person.svg';
import wrlogo from '../assets/logo/writefySmallLogo.svg'

type Props = {}

const Choosy = (props: Props) => {
  return (
      <section className="why-students-choose-us">
    <h2 className="title-choose">Why Students Choose Us</h2>
      <div className="containerml">
        <div className="contentml">
         <div className="purple-box">
            <img src={wrlogo} alt="Benefits illustration" className="benefits-image" />
            <div className="text-box">
              <span>What Students get by saving time with Writeyfy</span>
            </div>
          </div>
          <div className="image-box">
            <img src={person} alt="Benefits illustration" className="benefits-image" />
            <button className="post-job-btn">+Post a Job</button>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Choosy