import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';


const Banner = () => {
    return (
        <div className='py-10'>
            <SectionTitle 
            subheading={'---From 11am to 10pm---'}
            heading={'order online'}
            ></SectionTitle>
            <Swiper

                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-black text-xl uppercase text-center -mt-10'>salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-black text-xl uppercase text-center -mt-10'>pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-black text-xl uppercase text-center -mt-10'>soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-black text-xl uppercase text-center -mt-10'>dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-black text-xl uppercase text-center -mt-10'>salad</h2>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;