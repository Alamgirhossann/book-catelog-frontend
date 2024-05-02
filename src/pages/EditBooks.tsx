import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct } from '@/types/globalTypes';
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from '@/redux/features/bookCatalog/bookApis';
import { toast } from '@/components/ui/use-toast';
import coverImg from '../assets/images/Rectangle 11 (1).png';

function EditBooks() {
  const { id } = useParams();
  const { data: editData } = useGetSingleBookQuery(id);
  const [editBook] = useEditBookMutation();
  const navigate = useNavigate();

  const [data, setData] = useState<IProduct>({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
  });

  useEffect(() => {
    setData(editData?.data);
  }, [id]);

  const handleEditBook = () => {
    editBook({ id, data });
    toast({
      description: 'Book updated',
    });
    navigate('/allbooks');
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-10 px-5 md:px-[5rem] lg:px-[15rem] ">
      <div className="">
        <div className=" mb-4 font-bold text-[25px]">
          <h1 className=" text-[#8d27ae]">Update Book Information</h1>
        </div>
        <div className=" ">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className=" my-2">
                <div className=" ">
                  <label className=" " htmlFor="">
                    Title
                  </label>
                </div>
                <div className="w-full ">
                  <input
                    className="my-1 outline-none  min-h-[35px] border border-[#8d27ae] w-full rounded-md"
                    value={data?.title}
                    name="title"
                    id="title"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className=" my-2">
                <div className=" ">
                  <label className=" " htmlFor="">
                    Author
                  </label>
                </div>
                <div className=" ">
                  <input
                    className="my-1 outline-none min-h-[35px] border border-[#8d27ae] w-full rounded-md"
                    value={data?.author}
                    name="author"
                    id="author"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className=" my-2">
                <div className="">
                  <label className=" " htmlFor="">
                    Genre
                  </label>
                </div>
                <div className="">
                  <input
                    className="my-1 outline-none  min-h-[35px] border border-[#8d27ae] w-full rounded-md"
                    value={data?.genre}
                    name="genre"
                    id="genre"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className=" my-2">
                <div className="">
                  <label className=" " htmlFor="">
                    Publication Year
                  </label>
                </div>
                <div className=" ">
                  <input
                    className="my-1 outline-none min-h-[35px] border border-[#8d27ae] w-full rounded-md"
                    value={data?.publicationYear}
                    name="publicationYear"
                    id="publicationYear"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className=" h-full">
                <img src={coverImg} alt="" className="h-[98%] w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleEditBook}
            className=" mt-5 add bg-[#8d27ae] rounded-md px-4 py-2 text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBooks;
