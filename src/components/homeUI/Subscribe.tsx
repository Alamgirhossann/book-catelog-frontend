// import { Link } from 'react-router-dom';
// import header_img from '../../assets/images/banner.png';
// import { Input } from '../ui/input';
import { FiSend } from 'react-icons/fi';

const Subscribe = () => {
  const handleChange = () => {
    console.log('first');
  };
  return (
    <div className="  px-0 bg-[#8d27ae] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 py-8 md:px-20 px-5">
        <div className="">
          <div className="">
            <div className="  flex justify-center">
              <div className=" w-full">
                <h1 className="text-[1.8rem] md:text-[2.5rem] text-white font-bold">
                  Subscribe to our newsletter
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <p className="text-white">
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </p>
            <div className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Enter your Email"
                className="p-2 rounded-lg outline-none"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="rounded-full h-10 w-10 p-2 text-[25px] bg-[#fff] text-[#8d27ae]"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
