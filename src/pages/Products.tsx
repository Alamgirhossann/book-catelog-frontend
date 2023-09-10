import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useGetBooksQuery } from '@/redux/features/bookCatalog/bookApis';

import { IProduct } from '@/types/globalTypes';
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [search, setSearch] = useState('');
  const { data } = useGetBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <Button variant="default" className="mt-2 mb-2">
          <Link to="/addBook"> Add New Book</Link>
        </Button>
        <input
          className=" border-2 outline-1"
          type="text"
          onChange={handleSearch}
          placeholder="search book"
        />
      </div>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
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
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-5">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        {
          //   <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          //   <div>
          //     <p className="text-sm text-gray-700">
          //       Showing
          //       <span className="font-medium">1</span>
          //       to
          //       <span className="font-medium">{skip}</span>
          //       of
          //       <span className="font-medium">{total}</span>
          //       results
          //     </p>
          //   </div>
          //   <div>
          //     <nav
          //       className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          //       aria-label="Pagination"
          //     >
          //       <a
          //         href="#"
          //         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          //       >
          //         <span className="sr-only">Previous</span>
          //         <svg
          //           className="h-5 w-5"
          //           viewBox="0 0 20 20"
          //           fill="currentColor"
          //           aria-hidden="true"
          //         >
          //           <path
          //             fill-rule="evenodd"
          //             d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          //             clip-rule="evenodd"
          //           />
          //         </svg>
          //       </a>
          //       <a
          //         href="#"
          //         aria-current="page"
          //         className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          //       >
          //         {Math.ceil(total / limit)}
          //       </a>
          //       <a
          //         href="#"
          //         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          //       >
          //         <span className="sr-only">Next</span>
          //         <svg
          //           className="h-5 w-5"
          //           viewBox="0 0 20 20"
          //           fill="currentColor"
          //           aria-hidden="true"
          //         >
          //           <path
          //             fill-rule="evenodd"
          //             d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          //             clip-rule="evenodd"
          //           />
          //         </svg>
          //       </a>
          //     </nav>
          //   </div>
          // </div>
        }
      </div>
    </div>
  );
}
