import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


export default function PerViewCarousine() {
  return (
    <div className=''>
     
   
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,  Autoplay]}
        className="mySwiper"

        
      >
        <SwiperSlide>
          <img  className='h-[80vh] w-full' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-[80vh] w-full' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-[80vh] w-full' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
  

    </div>
  )
}
