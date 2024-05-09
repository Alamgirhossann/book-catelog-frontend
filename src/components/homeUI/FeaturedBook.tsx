import header_img from '../../assets/images/book.png';
import { useState } from 'react';

const FeaturedBook = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
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
                  Dive into an epic adventure with 'The Chronicles of Evermore.'
                  Immerse yourself in a world of magic, danger, and
                  unforgettable characters. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                  {!isExpanded && (
                    <span className={`${isExpanded ? 'hidden' : ''}`}>
                      {' '}
                      . . . .
                    </span>
                  )}
                  {isExpanded && (
                    <span className={`${!isExpanded ? 'hidden' : ''}`}>
                      {' '}
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  )}
                </p>

                <button
                  onClick={handleToggle}
                  className="bg-[#8d27ae] mt-5 text-white px-6 py-2 rounded-md"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;
