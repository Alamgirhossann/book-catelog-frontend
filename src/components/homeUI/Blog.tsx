import blog1 from '../../assets/images/Group 21.png';
import blog2 from '../../assets/images/Rectangle 5.png';
import blog3 from '../../assets/images/Rectangle 5 (1).png';
import blog4 from '../../assets/images/Rectangle 5 (2).png';

import './styles.css';

const cardData = [
  {
    title: 'MODERN FIXTURE',
    image: blog1,
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.',
  },
  {
    title: 'VINTAGE CHANDLIER',
    image: blog2,
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.',
  },
  {
    title: 'BULPILO',
    image: blog3,
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.',
  },
  {
    title: 'MODERN FIXTURE',
    image: blog4,
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorem alias id omnis adipisci laboriosam qui nobis autem iure officiis.',
  },
];

const Blog = () => {
  return (
    <div className="py-10 px-5 md:px-[5rem] bg-white" id="project">
      <h1 className="md:text-[25px] text-xl md:pb-10 md:pt-10 pt-5 pb-5 font-bold text-[#8d27ae] ">
        Read Our Many Blogs
      </h1>
      {/* <div className="flex justify-center">
        <p className="text-gray-500 px-2 w-[250px] sm:w-[400px] md:w-[800px] text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar lacus at feugiat iaculis. Suspendisse at viverra mauris, sit
          amet facilisis lectus. Pellentesque mattis auctor quam, et feugiat
          elit volutpat vel.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cardData.map((data, index) => (
          <div key={index} className="">
            <div className="h-full mx-0 sm:mx-0">
              {' '}
              <div
                className={`cardTwo w-full h-60 bg-white border border-gray-300 rounded-lg shadow-md`}
              >
                <div className={`front flex items-center justify-center`}>
                  <img
                    src={data.image}
                    className="w-full h-full rounded-lg"
                    alt="project"
                  />
                </div>
                <div
                  className={`back flex justify-center items-center bg-[#8d27ae]/30 text-white rounded-lg px-3`}
                >
                  <div
                    className="text-center"
                    style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
                  >
                    <h1 className="text-lg py-0 font-bold">{data.title}</h1>
                    <p>{data.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
