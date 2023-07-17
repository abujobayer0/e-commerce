import { SubNavBar, NavBar, Head } from "../components";
import {
  Banner,
  CategorySection,
  PopularProducts,
  PopularSellers,
} from "../shared";

const Home = () => {
  return (
    <div>
      <SubNavBar />
      <Head />
      <NavBar />
      <Banner />
      <CategorySection />
      <PopularProducts />
      <PopularSellers />
    </div>
  );
};

export default Home;
