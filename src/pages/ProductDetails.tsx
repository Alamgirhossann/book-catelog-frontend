import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from '@/redux/features/bookCatalog/bookApis';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
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

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{data?.data?.title}</h1>
          <p className="text-xl">Author: {data?.data?.author}</p>
          <p className="text-xl">Genre: {data?.data?.genre}</p>
          <p className="text-xl">
            Publication Year: {data?.data?.publicationYear}
          </p>
          <Button onClick={handleEditBook} className=" me-1">
            Edit Book
          </Button>
          <Button onClick={handleDeleteBook}>Delete Book</Button>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
