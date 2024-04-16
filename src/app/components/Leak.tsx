'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface LeakProps {
  title: string;
  desc: string;
}

export default function Leak({title, desc}: LeakProps) {
  return (
    <div className="max-w-[980px] mx-auto mt-8 border-t border-slate-200 pt-8">
      <div className="text-center text-2xl">{title}</div>
      <p className="p-4 mb-8">{desc}</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img className="block w-full" src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" >
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
