import { SetStateAction, useState } from 'react';

const FilterModal = () => {
  const [search, setSearch] = useState('');

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

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={openModal}
        className="bg-[#8d27ae] text-white font-bold py-2 px-4 rounded"
      >
        Advance Search
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
              <h1 className="text-xl font-semibold mb-2">Search by Title</h1>

              <input
                type="text"
                onChange={handleSearch}
                className="border outline-none"
                value={search}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
