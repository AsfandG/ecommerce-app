import BestSeller from "../components/best-seller";
import HeroSection from "../components/hero";
import LatestCollection from "../components/latest-collection";
import NewsLetterBox from "../components/newsletter-box";
import OurPolicy from "../components/our-policy";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
