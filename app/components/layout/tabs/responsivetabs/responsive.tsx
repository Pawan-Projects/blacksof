'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './module.style.css';
import { Pagination } from 'swiper/modules';
type Thumbnail = {
  icon: string;
  video: string;
};

type Tab = {
  title: string;
  subTitle: string;
  thumbnails: Thumbnail[];
};

interface ResponsiveSliderProps {
  tabs: Tab[];
}

export default function ResponsiveSlider({ tabs }: ResponsiveSliderProps) {
  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index} className='bg-black overflow-hidden pb-10'>
          <h2 className="text-xl pt-2 text-center">{tab.title}</h2>
          <p className="text-md font-light mb-4 text-center pb-5">{tab.subTitle}</p>

          <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper overflow-hidden"
            spaceBetween={20}
            slidesPerView={1}
          >
            {tab.thumbnails.map((thumb: Thumbnail, idx) => (
              <SwiperSlide key={idx}>
                <video
                  src={thumb.video}
                  poster={thumb.icon}
                  className="w-full h-[150px] pb-10 bg-black object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </>
  );
}
