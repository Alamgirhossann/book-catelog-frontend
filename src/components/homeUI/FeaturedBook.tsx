import { Link } from 'react-router-dom';
import header_img from '../../assets/images/book.png';

const FeaturedBook = () => (
  <div className="flex justify-center md:items-center py-16 md:px-10 px-0 bg-white">
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <div style={{ position: 'relative' }}>
        <div className="column  flex justify-center">
          <img
            src={header_img}
            alt="header_image"
            className="w-full h-[500px] colored-image"
          />
        </div>
        {/* <div
          className="absolute top-0 left-9 w-[550px] h-[450px] bg-[#8d27ae] opacity-30"
          // style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Adjust opacity here
        ></div> */}
      </div>
      <div className="">
        <div className="column pt-5 px-12 md:pt-16">
          <div className=" mb-10 flex justify-center">
            <div className=" w-full">
              <h1 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#8d27ae] ">
                Featured book
              </h1>
              <p className="md:text-xl text-md text-gray-500">
                It is a long established fact that a reader will be distracted
                by the readablecontent of a page when looking at its layout. The
                point of using Lorem
              </p>
              <Link to="#contact">
                <button className="bg-[#8d27ae] mt-5 text-white px-6 py-2 rounded-md">
                  CONTACT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedBook;
