
import { SubNavBar,NavBar, } from "../components";
import { Banner, CategorySection } from "../shared";
import PopularProducts from "../shared/products";

const Home = () => {

    return (
      <div>
      <SubNavBar/>
      <NavBar/>
      <Banner/>
      <CategorySection />
     <PopularProducts/>
      </div>
    );
};

export default Home; 