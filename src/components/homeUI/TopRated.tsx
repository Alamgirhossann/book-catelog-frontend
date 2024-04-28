import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import book from '../../assets/images/book.png';
import book1 from '../../assets/images/book3 4 (1).png';
import book2 from '../../assets/images/book16 1.png';
import book3 from '../../assets/images/book3 4.png';
import book4 from '../../assets/images/book4 4.png';
// import book5 from '../../assets/images/book.png';

import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const bookData = [
  // {
  //   title: 'Higher Education',
  //   image: book,
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  // },
  {
    title: 'Management Books',
    image: book1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Engineering Books',
    image: book2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Maintanence',
    image: book3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Support',
    image: book4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Management Books',
    image: book1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Engineering Books',
    image: book2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Maintanence',
    image: book3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Support',
    image: book4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  {
    title: 'Support',
    image: book4,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  },
  // {
  //   title: 'Electrical',
  //   image: book5,
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  // },
];

const TopRated = () => {
  return (
    <>
      <div className="py-20 md:px-20 px-5">
        <div>
          <h1 className=" md:text-[25px] text-xl pb-10 text-[#8d27ae] font-bold">
            Top Rated Books
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {bookData.map((data, index) => (
            <SwiperSlide>
              <div key={index}>
                <div className="flex justify-center ">
                  <img
                    className="border border-[#8d27ae]"
                    src={data.image}
                    alt=""
                  />
                </div>
                <h3 className="text-[#8d27ae]">{data.title}</h3>
                <p className="text-[12px] font-normal">{data.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopRated;
