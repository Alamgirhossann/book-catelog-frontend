import { Link } from 'react-router-dom';
import heroBanner from '../../assets/images/Mask Group (1).png';

const TopBanner = () => (
  <div className="flex justify-center md:items-center bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="pt-5 md:pt-16">
        <div className="column ">
          <div className="flex justify-center items-center ">
            <div className=" w-3/4">
              <h1 className="text-[1.8rem] md:text-[2.5rem] font-bold text-[#8d27ae]">
                ipsum dolor si
              </h1>
              <p className="md:text-xl text-md text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                lacus ut magna velit eleifend. Amet, quis urna, a eu.
              </p>
              <Link to="#contact">
                <button className=" my-5 bg-[#8d27ae] text-white px-6 py-2 rounded-md">
                  Read More
                </button>
              </Link>
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

export default TopBanner;
