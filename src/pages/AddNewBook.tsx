import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '@/types/globalTypes';
import { useCreateBookMutation } from '@/redux/features/bookCatalog/bookApis';
import { toast } from '@/components/ui/use-toast';

function AddNewBook() {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  const [data, setData] = useState<IProduct>({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
  });

  const handleCreateBook = () => {
    createBook(data);
    toast({
      description: 'Book Added',
    });
    navigate('/allbooks');
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-container">
      <div className="container-fluid">
        <div className="text-center mb-4">
          <h1 className=" ">Enter book Information</h1>
        </div>
        <div className="row ">
          <div className="col-md-5 text-center">
            <div>
              <div className="row">
                <div className="col-md-5 align-end">
                  <label className=" " htmlFor="">
                    Title
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data.title}
                    name="title"
                    id="title"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 align-end">
                  <label className=" " htmlFor="">
                    Author
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data.author}
                    name="author"
                    id="author"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 align-end">
                  <label className=" " htmlFor="">
                    Genre
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data.genre}
                    name="genre"
                    id="genre"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 align-end">
                  <label className=" " htmlFor="">
                    Publication Year
                  </label>
                </div>
                <div className="col-md-7 align-start">
                  <input
                    style={{ width: '70%' }}
                    className="my-1 text-center border-2 border-black"
                    value={data.publicationYear}
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
        <div>
          <button onClick={handleCreateBook} className="mx-1 mt-5 add">
            Create Book
          </button>
          <button className="mx-1 mt-5 delete">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewBook;
