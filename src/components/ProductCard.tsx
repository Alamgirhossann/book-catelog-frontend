import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import {
  useCreateCurrentlyReadingMutation,
  useCreateWishListMutation,
  useEditBookMutation,
} from '@/redux/features/bookCatalog/bookApis';
// import { addToCart } from '@/redux/features/cart/cartSlice';

import cardImg from '../assets/images/book4 4.png';
import reading from '../assets/images/icons8-reading-50 (2).png';
import notReading from '../assets/images/icons8-reading-50 (1).png';
import wish from '../assets/images/icons8-love-50.png';
import notWish from '../assets/images/icons8-love-50 (1).png';
import finish from '../assets/images/icons8-finish-flag-50.png';
import notfinish from '../assets/images/icons8-finish-flag-50 (1).png';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const [createWishList] = useCreateWishListMutation();
  const [createCurrentlyReading] = useCreateCurrentlyReadingMutation();
  const [editBook] = useEditBookMutation();

  // console.log(product.finish, !product.finish);
  const handleIsFinish = async () => {
    const options = {
      id: product._id,
      data: { finish: !product.finish },
    };
    await editBook(options);
  };
  const handleCreateWishList = async () => {
    const data: any = await createWishList(product);
    // console.log(data.error.data.message);
    // console.log(data);
    setTimeout(() => {
      if (data?.data?.success === true) {
        toast({
          description: 'Book added to wish list',
        });
      }
      if (data?.error?.data?.message) {
        toast({
          description: data.error.data.message,
        });
      }
    }, 500);
  };

  const handleCreateCurrentlyReading = async () => {
    const data: any = await createCurrentlyReading(product);
    setTimeout(() => {
      if (data?.data?.success === true) {
        toast({
          description: 'Book added to current reading list',
        });
      }
      if (data?.error?.data?.message) {
        toast({
          description: data.error.data.message,
        });
      }
    }, 500);
  };

  return (
    // <div>
    //   <div className="rounded-2xl h-[250px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
    //     {/* <div className=" flex gap-1">
    //       <Button onClick={handleCreateWishList} variant="default">
    //         Wish List
    //       </Button>
    //       <Button onClick={handleCreateCurrentlyReading} variant="default">
    //         Currently reading
    //       </Button>
    //       {product.finish === false ? (
    //         <Button onClick={handleIsFinish} variant="default">
    //           Finish
    //         </Button>
    //       ) : (
    //         <Button onClick={handleIsFinish} variant="destructive">
    //           Finished
    //         </Button>
    //       )}
    //     </div> */}

    //   </div>
    // </div>
    <>
      <div className="relative h-64">
        <img
          src={cardImg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-[#8d27ae] bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-end px-3 py-4 text-white">
          <Link to={`/book-details/${product._id}`} className="w-full ">
            <p className="text-[14px]">Title: {product.title}</p>
            <p className="text-[14px]">Author: {product?.author}</p>
            <p className=" text-[14px]">Genre: {product?.genre}</p>
            <p className=" text-[14px]">
              publicationYear: {product?.publicationYear}
            </p>
            <p className=" text-[14px]">creator: {product?.creator.email}</p>
          </Link>
          <div className=" flex gap-1">
            <button title="Add wish list" onClick={handleCreateWishList}>
              <img
                src={wish}
                alt=""
                className="bg-white rounded-full p-1 h-7 w-7"
              />
            </button>
            <button title="Add Read" onClick={handleCreateCurrentlyReading}>
              <img
                src={reading}
                alt=""
                className="bg-white rounded-full p-1 h-7 w-7"
              />
            </button>
            {product.finish === false ? (
              <button title="Not Finish" onClick={handleIsFinish}>
                <img
                  src={finish}
                  alt=""
                  className="bg-white rounded-full p-1 h-7 w-7"
                />
              </button>
            ) : (
              <button title="Finish" onClick={handleIsFinish}>
                <img
                  src={notfinish}
                  alt=""
                  className="bg-white rounded-full p-1 h-7 w-7"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
