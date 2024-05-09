import heroBanner from '../../assets/images/Mask Group (1).png';
import { useState } from 'react';

const TopBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center md:items-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="pt-5 md:pt-16">
          <div className="column ">
            <div className="flex justify-center items-center ">
              <div className=" w-3/4">
                <h1 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#8d27ae]">
                  Explore Our Vast Collection of Books!
                </h1>
                <p className="md:text-xl text-md text-gray-500">
                  Dive into captivating narratives, explore fascinating realms,
                  and ignite your imagination with our curated selection of
                  books. From timeless classics to thrilling mysteries, from
                  heartwarming tales to mind-bending adventures, there's a story
                  {!isExpanded && (
                    <span className={`${isExpanded ? 'hidden' : ''}`}>
                      {' '}
                      . . . .
                    </span>
                  )}
                  {isExpanded && (
                    <span className={`${!isExpanded ? 'hidden' : ''}`}>
                      {' '}
                      waiting for every reader. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </span>
                  )}
                </p>
                <button
                  onClick={handleToggle}
                  className=" my-5 bg-[#8d27ae] text-white px-6 py-2 rounded-md"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="column p-0 flex justify-center">
            <img
              src={heroBanner}
              alt="header_image"
              className="w-full md:h-[520px] h-[300px] colored-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
