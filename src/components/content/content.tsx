import React from "react";
import SwiperCore, {Navigation, Pagination} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper";
import {Card} from "./card/card";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './content.css'

export const Content = () => {
    SwiperCore.use([Pagination, Navigation]);

    return (
        <div className="container">
            <Swiper
                slidesPerView={3}
                modules={[Pagination, Autoplay]}
                autoplay={{delay: 5000}}
                className="slide-container">
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide><SwiperSlide>
                <Card />
            </SwiperSlide><SwiperSlide>
                <Card />
            </SwiperSlide>
            </Swiper>
        </div>

    );
}
