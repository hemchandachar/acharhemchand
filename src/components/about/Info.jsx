import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">MCA</span>
        </div>
        
        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Fresher</h3>
            <span className="about__subtitle">Seeking for Job</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-collection about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">15+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-badge-check about__icon'></i>
            <h3 className="about__title">Certifications</h3>
            <span className="about__subtitle">6+</span>
        </div>
    </div>
  )
}

export default Info