import TopBanner from '@/components/homeUI/TopBanner';
import Catagory from '@/components/homeUI/Catagory';
import EBook from '@/components/homeUI/EBook';
import NewBooks from '@/components/homeUI/NewBooks';
import FeaturedBook from '@/components/homeUI/FeaturedBook';
import DiscountSection from '@/components/homeUI/DiscountSection';
import Blog from '@/components/homeUI/Blog';
import TopRated from '@/components/homeUI/TopRated';
import Testimonial from '@/components/homeUI/Testimonial';

export default function Home() {
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
    </>
  );
}
