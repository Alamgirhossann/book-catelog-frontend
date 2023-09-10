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

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const [createWishList] = useCreateWishListMutation();
  const [createCurrentlyReading] = useCreateCurrentlyReadingMutation();
  const [editBook] = useEditBookMutation();

  console.log(product.finish, !product.finish);
  const handleIsFinish = async () => {
    const options = {
      id: product._id,
      data: { finish: !product.finish },
    };
    await editBook(options);
  };
  const handleCreateWishList = async () => {
    const data: any = await createWishList(product);
    setTimeout(() => {
      if (data?.success === true) {
        toast({
          description: 'Book added to wish list',
        });
      } else {
        toast({
          description: 'Book is allready exists on wishlist',
        });
      }
    }, 500);
  };

  const handleCreateCurrentlyReading = async () => {
    const data: any = await createCurrentlyReading(product);
    setTimeout(() => {
      if (data?.success === true) {
        toast({
          description: 'Book added to currently reading list',
        });
      } else {
        toast({
          description: 'Book is allready exists on currently reading list',
        });
      }
    }, 500);
  };

  return (
    <div>
      <div className="rounded-2xl h-[250px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/book-details/${product._id}`} className="w-full">
          <p>Title: {product.title}</p>
          <p>Author: {product?.author}</p>
          <p className="text-sm">Genre: {product?.genre}</p>
          <p className="text-sm">publicationYear: {product?.publicationYear}</p>
          {/* <p className="text-sm">creator: {product?.creator}</p> */}
        </Link>
        <div className=" flex gap-1">
          <Button onClick={handleCreateWishList} variant="default">
            Wish List
          </Button>
          <Button onClick={handleCreateCurrentlyReading} variant="default">
            Currently reading
          </Button>
          {product.finish === false ? (
            <Button onClick={handleIsFinish} variant="default">
              Finish
            </Button>
          ) : (
            <Button onClick={handleIsFinish} variant="destructive">
              Finished
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
