import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import { IProduct } from '@/types/globalTypes';
import ProductCard from '@/components/ProductCard';
import { useGetBooksQuery } from '@/redux/features/bookCatalog/bookApis';
import { useState } from 'react';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [search, setSearch] = useState('');
  const { data } = useGetBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {data?.data?.length > 0 ? (
          data?.data
            ?.slice(0, 10)
            .map((product: IProduct, i: number) => (
              <ProductCard key={i} product={product} />
            ))
        ) : (
          <p className=" text-red-500">
            Please login to see your favorit books list
          </p>
        )}
      </div>
      <div className="mb-36">
        <div className="flex flex-col items-center justify-center">
          <Button className="mt-10" asChild>
            <Link to="/allbooks">Browse all Books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
