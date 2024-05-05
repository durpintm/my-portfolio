import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Use this later for dynamic generation
const data = [
  {
    id: 1,
    name: "",
    avatar: AVTR1,
    review: "",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            earum quaerat consectetur hic est, sit ipsa excepturi repellat
            exercitationem, facilis asperiores autem a vel eaque pariatur
            aliquid natus libero unde.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            earum quaerat consectetur hic est, sit ipsa excepturi repellat
            exercitationem, facilis asperiores autem a vel eaque pariatur
            aliquid natus libero unde.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            earum quaerat consectetur hic est, sit ipsa excepturi repellat
            exercitationem, facilis asperiores autem a vel eaque pariatur
            aliquid natus libero unde.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Earnest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            earum quaerat consectetur hic est, sit ipsa excepturi repellat
            exercitationem, facilis asperiores autem a vel eaque pariatur
            aliquid natus libero unde.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
