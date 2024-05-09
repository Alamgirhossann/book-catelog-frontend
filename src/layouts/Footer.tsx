import fb from '../assets/images/icons8-facebook-50.png';
import twitter from '../assets/images/icons8-twitter-circled-50.png';
import youtube from '../assets/images/icons8-youtube-50 (1).png';
import linkedin from '../assets/images/icons8-linkedin-circled-50.png';
import location from '../assets/images/icons8-location-50.png';
import phone from '../assets/images/icons8-phone-50.png';
import message from '../assets/images/icons8-new-message-50.png';
import logo from '../assets/images/sample logo 1.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  const gradientBackground = {
    // backgroundImage: "linear-gradient(to right, #FFDDDC, #EA4C46)",
    background: '#fff',
    color: 'black',
    padding: '1rem',
    // borderRadius: "0.375rem", // You can use borderRadius to apply rounded corners
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // You can use boxShadow to apply shadow
  };
  return (
    <>
      <div style={gradientBackground}>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div>
            <img src={logo} alt="logo" className="w-12 h-12" />

            <p className="md:text-[0.8rem] text-sm tracking-wide">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it.
            </p>
            <div className="flex flex-row gap-4 mt-5">
              <Link to={'https://www.facebook.com'} target="black">
                <img
                  src={fb}
                  alt="facebook"
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>
              <Link to={'https://www.x.com'} target="blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-6 h-6 cursor-pointer text-white"
                />
              </Link>
              <Link to={'https://www.linkedin.com'} target="blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>
              <Link to={'https://www.youtube.com'} target="blank">
                <img
                  src={youtube}
                  alt="instagram"
                  className="w-6 h-6 cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="py-10 md:px-10 sm:py-0 tracking-widest leading-{32px}">
            <div>
              <h2 className="md:text-[25px] text-xl mb-3 font-bold">
                Useful Link
              </h2>
              <div className="md:text-[0.8rem] text-sm pb-1">
                <Link
                  className="text-black hover:text-black hover:underline"
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div className="md:text-[0.8rem] text-sm ">
                {' '}
                <Link
                  className="text-black leading-7 hover:text-black hover:underline"
                  to="#about"
                >
                  About
                </Link>
              </div>
              <div className="md:text-[0.8rem] text-sm">
                <Link
                  className="text-black leading-7 hover:text-black hover:underline"
                  to="#project"
                >
                  Our Projects
                </Link>
              </div>

              <div className="md:text-[0.8rem] text-sm">
                <Link
                  className="text-black leading-7 hover:text-black hover:underline"
                  to="#testimonial"
                >
                  Testimonial
                </Link>
              </div>
              <div className="md:text-[0.8rem] text-sm">
                <Link
                  className="text-black leading-7 hover:text-black hover:underline"
                  to="#contact"
                >
                  Contact Us
                </Link>
              </div>
              <div className="md:text-[0.8rem] text-sm">
                <Link
                  className="text-black leading-7 hover:text-black hover:underline"
                  to="/policy"
                >
                  Our Policy
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-[25px] text-xl mb-3 font-bold">Contact</h2>

            <div className="flex md:text-xl text-md">
              <p className="me-3">
                <img src={location} alt="" className="w-6 h-6" />
              </p>
              <p className="md:text-[0.8rem] text-sm tracking-wide">
                It is a long established fact that a reader will be distracted
              </p>
            </div>
            <div className="flex md:text-xl my-4 text-md">
              <p className="me-3">
                <img src={phone} alt="" className="w-6 h-6" />
              </p>
              <p className="md:text-[0.8rem] text-sm tracking-widest">
                (+71) 1234567890
                <br />
                (+71) 1234567890
              </p>
            </div>
            <div className="flex md:text-xl text-md">
              <p className="me-3">
                <img src={message} alt="" className="w-6 h-6" />
              </p>
              <p className="md:text-[0.8rem] text-sm tracking-widest">
                info@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className=" text-black my-5 text-center">
          <p className="text-sm md:text-[0.8rem] tracking-wider ">
            © 2023 All Rights Reserved by Electron
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
