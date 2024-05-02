import ProductCard from '@/components/ProductCard';
import { useGetBooksQuery } from '@/redux/features/bookCatalog/bookApis';
import { IProduct } from '@/types/globalTypes';
import { SetStateAction, useState } from 'react';

export default function Products() {
  const [search, setSearch] = useState('');
  console.log(search);
  const { data } = useGetBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

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
          <div className="flex items-center justify-center">
            <button
              onClick={openModal}
              className="bg-[#8d27ae] text-white font-bold py-2 px-4 rounded"
            >
              Advance Search
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleView}
            >
              {isGrid ? 'Switch to Block View' : 'Switch to Grid View'}
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
        <div className="container mx-auto my-8">
          <div className="flex justify-center mb-4"></div>
          <div className={isGrid ? 'grid md:grid-cols-3 gap-4' : 'block'}>
            {data?.data?.length > 0 ? (
              data?.data?.map((product: IProduct, i: number) => (
                <ProductCard key={i} product={product} />
              ))
            ) : (
              <p className="text-red-500">
                Please login to see your favorit books list
              </p>
            )}
          </div>
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
