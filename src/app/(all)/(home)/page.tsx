// HomePage.tsx
import Categories from "./_components/Categories";
import CategoriesSection from "./_components/CategoriesSection";
import Content from "./_components/Content";
import Hero from "./_components/Hero";
import PlacesSection from "./_components/PlacesSection";
import Reviews from "./_components/Reviews";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <PlacesSection />
    </>
  );
};

export default HomePage;