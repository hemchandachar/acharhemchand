import React, { useState } from 'react';
import "./certifications.css";


const Certifications = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="certifications section" id="certifications">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Projects</span>

        <div className="certifications__container container grid">
            <div className="certifications__content">
                <i class='uil uil-arrow certifications__icon'></i>
                <h3 className="certifications__title">
                    Coffee Machine <br /> Vendoring
                </h3>
            
                <span className="certifications__button" onClick={() => toggleTab(1)}>View More
                <i className="uil uil-arrow-right certifications__button"></i>
                </span>

                <div className={toggleState === 1 ? "certifications__modal active-modal" : "certifications__modal"}>
                    <div className="certifications__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                        <h3 className="certifications__modal-title">
                            Coffee Machine Vendoring
                        </h3>
                        <p className="certifications__modal-description">This project is a simple coffee vending machine program written in Python, designed to manage resources, process transactions, and dispense coffee.</p>

                        <ul className="certifications__modal-certifications grid">
                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Resource Management: Checks if there are enough ingredients to make the selected coffee.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Menu and Pricing: Offers three types of coffee with specific costs: espresso, latte, and cappuccino.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Transaction Handling: Processes payments and gives change if needed.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Report Generation: Provides a report of remaining resources and profit earned.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                User Interaction: Allows users to select coffee, insert money, and receive their drink along with a thank you message.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="certifications__content">
                <i class='uil uil-arrow certifications__icon'></i>
                <h3 className="certifications__title">
                    Stock Price <br /> Alerts
                </h3>
            
                <span className="certifications__button" onClick={() => toggleTab(2)}>View More
                <i className="uil uil-arrow-right certifications__button"></i>
                </span>

                <div className={toggleState === 2 ? "certifications__modal active-modal" : "certifications__modal"}>
                    <div className="certifications__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                        <h3 className="certifications__modal-title">
                            Stock Price Alert
                        </h3>
                        <p className="certifications__modal-description">This project is a simple coffee vending machine program written in Python, designed to manage resources, process transactions, and dispense coffee.</p>

                        <ul className="certifications__modal-certifications grid">
                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Resource Management: Checks if there are enough ingredients to make the selected coffee.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Menu and Pricing: Offers three types of coffee with specific costs: espresso, latte, and cappuccino.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Transaction Handling: Processes payments and gives change if needed.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Report Generation: Provides a report of remaining resources and profit earned.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                User Interaction: Allows users to select coffee, insert money, and receive their drink along with a thank you message.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="certifications__content">
                <i class='uil uil-arrow certifications__icon'></i>
                <h3 className="certifications__title">
                    Password <br /> Management
                </h3>
            
                <span className="certifications__button" onClick={() => toggleTab(3)}>View More
                <i className="uil uil-arrow-right certifications__button"></i>
                </span>

                <div className={toggleState === 3 ? "certifications__modal active-modal" : "certifications__modal"}>
                    <div className="certifications__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                        <h3 className="certifications__modal-title">
                            Password Management System
                        </h3>
                        <p className="certifications__modal-description">This project is a simple coffee vending machine program written in Python, designed to manage resources, process transactions, and dispense coffee.</p>

                        <ul className="certifications__modal-certifications grid">
                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Resource Management: Checks if there are enough ingredients to make the selected coffee.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Menu and Pricing: Offers three types of coffee with specific costs: espresso, latte, and cappuccino.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Transaction Handling: Processes payments and gives change if needed.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Report Generation: Provides a report of remaining resources and profit earned.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                User Interaction: Allows users to select coffee, insert money, and receive their drink along with a thank you message.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="certifications__content">
                <i class='uil uil-arrow certifications__icon'></i>
                <h3 className="certifications__title">
                    Choreo <br /> Hotel Management
                </h3>
            
                <span className="certifications__button" onClick={() => toggleTab(3)}>View More
                <i className="uil uil-arrow-right certifications__button"></i>
                </span>

                <div className={toggleState === 3 ? "certifications__modal active-modal" : "certifications__modal"}>
                    <div className="certifications__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times certifications__modal-close"></i>

                        <h3 className="certifications__modal-title">
                            Development of Hotel Management System using Choreo Software
                        </h3>
                        <p className="certifications__modal-description">This project involves creating a comprehensive hotel management system with frontend uisng React and backend using NodeJs.</p>

                        <ul className="certifications__modal-certifications grid">
                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Frontend Development: Design a responsive and interactive UI using React.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Backend Development: Implement scalable and efficient server-side logic using Node.js.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Integration with Choreo: Utilize Choreo software for seamless integration and deployment.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                User Authentication: Implement secure user login and management features.
                                </p>
                            </li>

                            <li className="certifications__modal-data">
                                <i className="uil uil-check-circle certifications__modal-icon"></i>
                                <p className="certifications__modal-info">
                                Real-Time Updates: Enable real-time updates for booking status and room availability.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certifications