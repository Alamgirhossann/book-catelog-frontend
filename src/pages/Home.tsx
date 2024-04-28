import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import { IProduct } from '@/types/globalTypes';
import ProductCard from '@/components/ProductCard';
import { useGetBooksQuery } from '@/redux/features/bookCatalog/bookApis';
import { useState } from 'react';
import TopBanner from '@/components/homeUI/TopBanner';
import Catagory from '@/components/homeUI/Catagory';
import EBook from '@/components/homeUI/EBook';
import NewBooks from '@/components/homeUI/NewBooks';
import FeaturedBook from '@/components/homeUI/FeaturedBook';
import DiscountSection from '@/components/homeUI/DiscountSection';
import Subscribe from '@/components/homeUI/Subscribe';
import Blog from '@/components/homeUI/Blog';
import TopRated from '@/components/homeUI/TopRated';
import Testimonial from '@/components/homeUI/Testimonial';

export default function Home() {
  const [search] = useState('');
  const { data } = useGetBooksQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <TopBanner />
      <Catagory />
      <NewBooks />
      <EBook />
      <TopRated />
      <DiscountSection />
      <FeaturedBook />
      <Testimonial />
      <Blog />
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
    </>
  );
}
