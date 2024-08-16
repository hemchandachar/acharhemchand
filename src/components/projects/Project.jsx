import React from 'react';
import "./project.css";
import { Data } from "./Data.jsx";
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const Project = () => {
  return (
    <section className="project container section" id="projects">
        <h2 className="section__title">Certifications</h2>
        <span className="section__subtitle">My Certifications</span>

        <Swiper
            className="projects__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({ id, image, title, description }) => (
                <SwiperSlide className="project__card" key={id}>
                    <img src={image} alt="" className="project__img" />
                    <h3 className="project__name">{title}</h3>
                    <p className="project__description">{description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
};

export default Project;
