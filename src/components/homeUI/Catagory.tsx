// import { Swiper, SwiperSlide } from 'swiper/react';
// import catagory1 from '../../assets/images/Rectangle 11 (1).png';
// import catagory2 from '../../assets/images/Rectangle 11 (2).png';
// import catagory3 from '../../assets/images/Rectangle 11.png';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// import './catagory.css';

// // import required modules
// import { EffectCards } from 'swiper/modules';
// import { Description } from '@radix-ui/react-toast';

// const catagory = [
//   {
//     title: 'John Doe',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eos distinctio possimus quibusdam fugit quaerat sunt reiciendis rem laudantium corporis labore, ad, iusto maxime nulla.',
//     image: catagory1,
//   },
//   {
//     title: 'Jane Smith',
//     description:
//       'Lorem ipsum dolor sit amet consectetur quos illo molestiae nobis alias ullam nulla. adipisicing elit. Quae quia excepturi eaque ducimus quos illo molestiae nobis alias ullam nulla.',
//     image: catagory2,
//   },
//   {
//     title: 'Bob Johnson',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, fugit repudiandae dolorum ex accusantium distinctio consectetur amet porro ipsa quidem. Cumque officiis doloremque ullam, itaque magnam molestiae eligendi.',
//     image: catagory3,
//   },
//   {
//     title: 'Jane Smith',
//     description:
//       'Lorem ipsum dolor sit amet consectetur quos illo molestiae nobis alias ullam nulla. adipisicing elit. Quae quia excepturi eaque ducimus quos illo molestiae nobis alias ullam nulla.',
//     image: catagory2,
//   },
//   {
//     title: 'Bob Johnson',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, fugit repudiandae dolorum ex accusantium distinctio consectetur amet porro ipsa quidem. Cumque officiis doloremque ullam, itaque magnam molestiae eligendi.',
//     image: catagory3,
//   },
// ];

// const Catagory = () => (
//   <>
//     {/* <Swiper
//       effect={'cards'}
//       grabCursor={true}
//       modules={[EffectCards]}
//       className=""
//     >
//       {catagory.map((data, index) => (
//         <SwiperSlide>
//           <div key={index}>
//             <img className="h-28 w-full" src={data.image} alt="" />
//             <h3>{data.title}</h3>
//             <p className="text-[12px] font-normal">{data.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper> */}

//   </>
// );

// export default Catagory;

import catagory1 from '../../assets/images/Rectangle 11 (1).png';
import catagory2 from '../../assets/images/Rectangle 11 (2).png';
import catagory3 from '../../assets/images/Rectangle 11.png';

import { Link } from 'react-router-dom';

const cardData = [
  {
    title: 'Fiction',
    image: catagory1,
    content:
      'Escape reality with our captivating fiction collection. Explore worlds of imagination, characters, and plot twists that will leave you mesmerized.',
  },
  {
    title: 'Management Books',
    image: catagory2,
    content:
      'Unlock your leadership potential with expert insights. Elevate your management skills and drive success with our curated selection of books',
  },
  {
    title: 'Engineering Books',
    image: catagory3,
    content:
      'Master the intricacies of engineering with our comprehensive collection. Dive into cutting-edge topics and expand your technical expertise effortlessly.',
  },
  // {
  //   title: 'Maintanence',
  //   image: catagory1,
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  // },
  // {
  //   title: 'Support',
  //   image: catagory2,
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  // },
  // {
  //   title: 'Electrical',
  //   image: catagory3,
  //   content:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,',
  // },
];

const Catagory = () => {
  return (
    <div className=" bg-[#8d27ae] py-10 px-5 md:px-20" id="service">
      <h1 className=" md:text-[25px] text-xl pb-10 text-white font-bold">
        Catagory
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cardData.map((data, index) => (
          <div className="mb-3 ">
            <Link to="/">
              <div className="h-full px-0 sm:mx-0">
                {' '}
                <div
                  className={`transform transition-transform duration-300 hover:scale-105 text-center shadow-2xl h-full rounded-lg bg-white `}
                  style={{ marginBottom: '15px' }}
                >
                  <div className="flex justify-center  ">
                    <div className="h-48 w-full flex justify-center items-center">
                      <img
                        src={data.image}
                        alt="project_image"
                        className="flex justify-center h-48 w-full "
                      />
                    </div>
                  </div>
                  <p className="md:text-[18px] text-[#8d27ae] text-xl text-center my-3 font-semibold tracking-wide">
                    {data.title}
                  </p>
                  <p className="tracking-wide text-gray-500">{data.content}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/">
          <button className="bg-[#fff] text-[#8d27ae]  py-2 rounded-lg active:bg-[#48105c]">
            <span className={` px-5 py-2`}>See More</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Catagory;
