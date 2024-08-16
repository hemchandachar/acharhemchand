import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Hemchand Achar</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#certifications" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Certifications</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="http://www.linkedin.com/in/hemchandachar" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin"></i>
                </a>
                        
                <a href="https://github.com/hemchandachar" className="home__social-icon" target="_blank">
                <i class="uil uil-github"></i>
                </a>

                <a href="https://www.instagram.com/thehemchandss?igsh=czh2c3RwZ2V4b3p2&utm_source=qr" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100013790501503&mibextid=JRoKGi" className="home__social-icon" target="_blank">
                <i class="uil uil-facebook"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Hemchand Achar. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer