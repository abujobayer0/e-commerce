import { SubNavBar, NavBar, Head } from "../components";
import { Banner, CategorySection } from "../shared";
import PopularProducts from "../shared/products";

const Home = () => {
  return (
    <div>
      <SubNavBar />
      <Head />
      <NavBar />
      <Banner />
      <CategorySection />
      <PopularProducts />
    </div>
  );
};

export default Home;
