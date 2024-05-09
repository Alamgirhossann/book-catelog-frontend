import ProductCard from '@/components/ProductCard';
import { useGetBooksQuery } from '@/redux/features/bookCatalog/bookApis';
import { IProduct } from '@/types/globalTypes';
import { SetStateAction, useState } from 'react';
import girdView from '../assets/images/icons8-menu-vertical-50 (2).png';
import blockView from '../assets/images/icons8-ellipsis-50.png';
import BlockProductCard from '@/components/BlockProductCard';

export default function Products() {
  const [search, setSearch] = useState('');
  // console.log(search);
  const { data } = useGetBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  return (
    <>
      <div className="py-10 px-5 md:px-[5rem]">
        <div className="py-5">
          <h1 className=" md:text-[20px] text-xl pb-10 text-[#8d27ae] font-bold">
            Books
          </h1>
        </div>
        <div className="">
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={openModal}
              className="bg-white border border-[#8d27ae] text-[#8d27ae] font-bold py-2 px-4 rounded"
            >
              Advance Search
            </button>
            <button
              className="bg-white border border-[#8d27ae] font-bold py-2 px-3 rounded"
              onClick={toggleView}
            >
              {isGrid ? (
                <img className="h-6" src={girdView} alt="" />
              ) : (
                <img className="h-6" src={blockView} alt="" />
              )}
            </button>
            {isOpen && (
              <div className="fixed z-10 inset-0 overflow-y-auto flex items-start justify-center bg-black bg-opacity-50">
                <div className="relative w-3/4 p-4 bg-white rounded-lg shadow-lg mt-10">
                  <div className="flex justify-end">
                    <button
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-xl font-semibold mb-2">
                      Search by Title
                    </h1>

                    <input
                      type="text"
                      onChange={handleSearch}
                      className="border outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="my-8">
          {isGrid ? (
            <div className={'grid md:grid-cols-4 gap-4'}>
              {data?.data?.length > 0 ? (
                data?.data?.map((product: IProduct, i: number) => (
                  <div className="my-2">
                    <ProductCard key={i} product={product} />
                  </div>
                ))
              ) : (
                <p className="text-red-500">
                  Please login to see your favorit books list
                </p>
              )}
            </div>
          ) : (
            <div className={'block '}>
              {data?.data?.length > 0 ? (
                data?.data?.map((product: IProduct, i: number) => (
                  <div className="my-2">
                    <BlockProductCard key={i} product={product} />
                  </div>
                ))
              ) : (
                <p className="text-red-500">
                  Please login to see your favorit books list
                </p>
              )}
            </div>
          )}
        </div>

        {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-10 pb-20">
          {data?.data?.length > 0 ? (
            data?.data?.map((product: IProduct, i: number) => (
              <ProductCard key={i} product={product} />
            ))
          ) : (
            <p className="text-red-500">
              Please login to see your favorit books list
            </p>
          )}
        </div> */}
      </div>
    </>
  );
}
