import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct } from '@/types/globalTypes';
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from '@/redux/features/bookCatalog/bookApis';
import { toast } from '@/components/ui/use-toast';

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
    <div className="main-container">
      <div className="container-fluid">
        <div className="text-center mb-4 font-bold text-2xl">
          {id ? (
            <h1 className=" ">Update book Information</h1>
          ) : (
            <h1 className=" ">Enter book Information</h1>
          )}
        </div>
        <div className="row ">
          <div className="col-md-5 text-center">
            <div>
              <div className="row my-2">
                <div className="col-md-5 align-end">
                  <label className="font-bold " htmlFor="">
                    Title
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data?.title}
                    name="title"
                    id="title"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-5 align-end">
                  <label className=" font-bold" htmlFor="">
                    Author
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data?.author}
                    name="author"
                    id="author"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-5 align-end">
                  <label className=" font-bold" htmlFor="">
                    Genre
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data?.genre}
                    name="genre"
                    id="genre"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-5 align-end">
                  <label className=" font-bold" htmlFor="">
                    Publication Year
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data?.publicationYear}
                    name="publicationYear"
                    id="publicationYear"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleEditBook}
          className="mx-1 mt-5 add bg-black px-4 py-2 text-white"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EditBooks;
