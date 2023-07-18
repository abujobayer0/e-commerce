import { SubNavBar, NavBar, Head } from "../components";
import {
  Banner,
  CategorySection,
  PopularProducts,
  PopularSellers,
} from "../shared";
import AllProductsSlide from "./ProductsPage";

const Home = () => {
  return (
    <div>
      <SubNavBar />
      <Head />
      <NavBar />
      <Banner />
      <CategorySection />
      <PopularProducts />
      <AllProductsSlide />
      <PopularSellers />
    </div>
  );
};

export default Home;
