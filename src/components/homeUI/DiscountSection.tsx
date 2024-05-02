import { Link } from 'react-router-dom';
import header_img from '../../assets/images/Unsplash.png';
import TimeCountDown from './TimeCountDown';

const DiscountSection = () => (
  <div className="flex justify-center md:items-center px-3 md:px-10 bg-[#8d27ae]">
    <div className=" grid grid-cols-1 md:grid-cols-2">
      <div className="pt-5 md:pt-10">
        <div className="column ">
          <div className=" mb-10 flex justify-center">
            <div className=" w-3/4">
              <h1 className="text-[1.8rem] md:text-[2.5rem] text-[#fff] font-bold">
                All books are 50% off now! Don't miss such a deal!
              </h1>
              <p className="md:text-xl text-md text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
              <div className=" text-white text-2xl mt-4">
                <TimeCountDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="column">
          <img
            src={header_img}
            alt="header_image"
            className="w-full md:h-[450px] h-[300px]colored-image"
          />
        </div>
      </div>
    </div>
  </div>
);

export default DiscountSection;
