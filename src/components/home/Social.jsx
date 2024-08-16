import React from 'react';
import Home from './Home';

const Social = () => {
    return (
        <div className="home__social">
            <a href="http://www.linkedin.com/in/hemchandachar" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
            </a>
                    
            <a href="https://github.com/hemchandachar" className="home__social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>

            <a href="https://www.instagram.com/thehemchandss?igsh=czh2c3RwZ2V4b3p2&utm_source=qr" className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
            </a>
        </div>
    )
}

export default Social;