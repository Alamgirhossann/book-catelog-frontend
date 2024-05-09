import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from '@/redux/features/bookCatalog/bookApis';
import { useNavigate, useParams } from 'react-router-dom';
import bgImage from '../assets/images/Rectangle 5.png';
import reading from '../assets/images/icons8-reading-50 (2).png';
import notReading from '../assets/images/icons8-reading-50 (1).png';
import wish from '../assets/images/icons8-love-50.png';
import notWish from '../assets/images/icons8-love-50 (1).png';
import finish from '../assets/images/icons8-finish-flag-50.png';
import notfinish from '../assets/images/icons8-finish-flag-50 (1).png';
import edit from '../assets/images/icons8-edit-50 (1).png';
import deleteIcon from '../assets/images/icons8-delete-50 (1).png';
import { Rating } from 'react-simple-star-rating';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function ProductDetails() {
  const [userTokent, setUserToken] = useState<any>('');

  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  console.log(data);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    const text = 'Do you want to delete book';
    if (confirm(text) == true) {
      deleteBook(id);
      toast({
        description: 'Book Deleted',
      });
      navigate('/allbooks');
    }
  };

  const handleEditBook = () => {
    navigate(`/updateBook/${id}`);
  };

  const [rating, setRating] = useState<number>(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  useEffect(() => {
    const user = localStorage.getItem('accessToken');
    if (user) {
      // Check if user is not null
      const userData: any = jwtDecode(user);
      setUserToken(userData);
    }
  }, []);

  return (
    <>
      <div className="py-10 px-5 md:px-[5rem]">
        <div className="py-5">
          <h1 className=" md:text-[20px] text-xl pb-10 text-[#8d27ae] font-bold">
            Books/BookDetail
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          <div>
            <div className="flex gap-2">
              <div className="flex">
                <Rating
                  // onClick={handleRating}
                  // onPointerEnter={onPointerEnter}
                  // onPointerLeave={onPointerLeave}
                  // onPointerMove={onPointerMove}
                  // initialValue={rating}
                  size={20}
                  /* Available Props */
                />
              </div>
              <p>125 Review</p>
            </div>
            <div>
              <div>
                <h1>{data?.data?.title}</h1>
                <img src={bgImage} alt="" className="h-20 w-20 rounded-full" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit deleniti sunt repellat nobis, eaque deserunt,
                  temporibus eveniet voluptas animi libero doloremque. Dicta
                  officiis sed illo veniam commodi modi fuga ab!
                </p>
              </div>

              <div className="flex gap-2 py-2">
                <button title="Add wish list">
                  <img src={wish} alt="" className="bg-white  h-5 w-5" />
                </button>
                <button title="Add Read">
                  <img src={reading} alt="" className="bg-white  h-5 w-5" />
                </button>
                <button title="Not Finish">
                  <img src={finish} alt="" className="bg-white  h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <img src={bgImage} alt="" />
        </div>

        <div className="w-full flex parent">
          <div className="bg-[#8d27ae] text-white py-2 px-3 div-1 w-[30%]">
            <p>Title</p>
          </div>
          <div className=" div-2 w-[70%] py-2 px-5 bg-[#8d27ae]/20">
            <p>{data?.data?.title}</p>
          </div>
        </div>
        <div className="w-full flex parent">
          <div className="bg-[#8d27ae] text-white py-2 px-3 div-1 w-[30%]">
            <p>Author</p>
          </div>
          <div className=" div-2 w-[70%] py-2 px-5 bg-[#8d27ae]/20">
            <p>{data?.data?.author}</p>
          </div>
        </div>
        <div className="w-full flex parent">
          <div className="bg-[#8d27ae] text-white py-2 px-3 div-1 w-[30%]">
            <p>Genre</p>
          </div>
          <div className=" div-2 w-[70%] py-2 px-5 bg-[#8d27ae]/20">
            <p>{data?.data?.genre}</p>
          </div>
        </div>
        <div className="w-full flex parent">
          <div className="bg-[#8d27ae] text-white py-2 px-3 div-1 w-[30%]">
            <p>Publication Year</p>
          </div>
          <div className=" div-2 w-[70%] py-2 px-5 bg-[#8d27ae]/20">
            <p>{data?.data?.publicationYear}</p>
          </div>
        </div>
        <div className="w-full flex parent">
          <div className="bg-[#8d27ae] text-white py-2 px-3 div-1 w-[30%]">
            <p>Creator</p>
          </div>
          <div className=" div-2 w-[70%] py-2 px-5 bg-[#8d27ae]/20">
            <p>{data?.data?.creator.email}</p>
          </div>
        </div>
        {data?.data?.creator.email == userTokent.userId && (
          <div className="flex max-w-7xl mx-auto items-center ">
            <div className="w-[50%] space-y-3">
              <button
                onClick={handleEditBook}
                className=" me-1 py-2 px-3 bg-[#8d27ae] rounded-md"
              >
                <img
                  src={edit}
                  alt="edit icon"
                  className=" h-6 w-6 hover:-rotate-12"
                />
              </button>
              <button
                onClick={handleDeleteBook}
                className="py-2 px-3 bg-[#8d27ae] rounded-md"
              >
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  className=" h-6 w-6 hover:-rotate-12"
                />
              </button>
            </div>
          </div>
        )}

        <ProductReview id={id!} />
      </div>
    </>
  );
}
