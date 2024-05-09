import { Link } from 'react-router-dom';
import header_img from '../../assets/images/pexels-olha-ruskykh-5984619 1.png';
import { useState } from 'react';

const EBook = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex justify-center md:items-center  bg-white">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className="pt-5 md:pt-16">
          <div className="column pt-0">
            <div className=" flex justify-center">
              <div className=" w-3/4">
                <h1 className="text-[1.8rem] md:text-[2.5rem]  font-bold text-[#8d27ae]">
                  Access, Read, Practice & Engage with Digital Content (eBook)
                </h1>
                <p className="md:text-xl text-md text-gray-500">
                  Access vast knowledge anywhere, anytime with our convenient
                  and portable ebooks. Expand your horizons effortlessly.
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
                  className="bg-[#8d27ae] text-white py-2 px-6 my-4 rounded-lg active:bg-[#48105c]"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="column flex justify-center">
            <img
              src={header_img}
              alt="header_image"
              className="w-full md:h-[520px] h-[300px]"
            />
          </div>
          {/* <div className="absolute inset-0 bg-[#8d27ae] opacity-30"></div> */}
        </div>
      </div>
    </div>
  );
};

export default EBook;
