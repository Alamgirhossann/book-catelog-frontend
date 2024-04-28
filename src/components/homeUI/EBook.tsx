import { Link } from 'react-router-dom';
import header_img from '../../assets/images/pexels-olha-ruskykh-5984619 1.png';

const EBook = () => (
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
                It is a long established fact that a reader will be distracted
                by the readablecontent of a page when looking at its layout. The
                point of using Lorem
              </p>
              <Link to="#contact">
                <button className="bg-[#8d27ae] text-white py-2 px-6 my-4 rounded-lg active:bg-[#48105c]">
                  CONTACT
                </button>
              </Link>
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

export default EBook;
