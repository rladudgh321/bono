'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../globals.css';

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import MainPageLetter from './MainPageLetter';

export default function MainPicture() {
  const img_1 = 'https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const img_2 = 'https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const img_3 = 'https://images.unsplash.com/photo-1712371962512-bfb8588dfebd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <div className="relative w-full h-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="h-[70vh] absolute right-0 left-0 top-0 w-full"
        >
          <SwiperSlide>
            <img height={400} src={img_1} className="overflow-hidden opacity-70" />
            <div className="text-center">
              <MainPageLetter />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img height={400} src={img_2} className="overflow-hidden opacity-70" />
            <MainPageLetter />
          </SwiperSlide>
          <SwiperSlide>
            <img height={400} src={img_3} className="overflow-hidden opacity-70" />
            <MainPageLetter />
          </SwiperSlide>
        </Swiper>
    </div>
  );
}
