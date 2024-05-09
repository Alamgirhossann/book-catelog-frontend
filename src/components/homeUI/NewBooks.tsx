import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import book from '../../assets/images/book.png';
// import book1 from '../../assets/images/book3 4 (1).png';
// import book2 from '../../assets/images/book16 1.png';
// import book3 from '../../assets/images/book3 4.png';
// import book4 from '../../assets/images/book4 4.png';
// import book5 from '../../assets/images/book.png';
import './styles.css';

import { Pagination } from 'swiper/modules';
import { useGetAllBooksQuery } from '@/redux/features/bookCatalog/bookApis';
import ProductCard from '../ProductCard';
import { IProduct } from '@/types/globalTypes';

// const bookData = [
//   // {
//   //   title: 'Higher Education',
//   //   image: book,
//   //   content:
//   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   // },
//   {
//     title: 'Management Books',
//     image: book1,
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   },
//   {
//     title: 'Engineering Books',
//     image: book2,
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   },
//   {
//     title: 'Maintanence',
//     image: book3,
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   },
//   {
//     title: 'Support',
//     image: book4,
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   },
//   {
//     title: 'Support',
//     image: book4,
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   },
//   // {
//   //   title: 'Electrical',
//   //   image: book5,
//   //   content:
//   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
//   // },
// ];

const NewBooks = () => {
  const { data } = useGetAllBooksQuery({});

  return (
    <>
      <div className="py-20 md:px-20 px-5">
        <div>
          <h1 className=" md:text-[25px] text-xl pb-10 text-[#8d27ae] font-bold">
            New Books
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <div className="">
            {data?.data?.map((product: IProduct, index: number) => (
              <SwiperSlide>
                <div key={index} className="my-2 w-full text-left">
                  <ProductCard key={index} product={product} />

                  {/* <div className="flex justify-center ">
                    <img
                      className="border border-[#8d27ae]"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <h3 className="text-[#8d27ae]">{product.title}</h3>
                  <p className="text-[12px] font-normal">
                    {product.publicationYear}
                  </p> */}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default NewBooks;
