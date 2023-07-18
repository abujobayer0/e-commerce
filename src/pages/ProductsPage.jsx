import { Box, useTheme } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCardHome } from "../components";
import "./style.product.css";
const AllProductsSlide = () => {
  const theme = useTheme();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        background: theme.palette.customColor.white,
        px: { xs: "20px", md: "25px" },
        py: 2,
      }}
    >
      <div className="flex flex-col title-before-border justify-start py-12 items-start ">
        <h1
          style={{ color: theme.palette.font.olive }}
          className="text-3xl  xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white"
        >
          All Products
        </h1>
      </div>
      <Carousel responsive={responsive}>
        <ProductCardHome
          img={
            "https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ="
          }
          title={"Jamdani Saree"}
        />
        <ProductCardHome
          img={
            "https://static.aadi.com.bd/__sized__/products/31883-61101-panjabi-maslaq-126026-1-crop-c0-5__0-5-400x500-70.jpg"
          }
          title={"Panjabi For Men"}
        />
        <ProductCardHome
          img={
            "https://www.koskii.com/cdn/shop/products/koskii-maroon-swarovski-semi-crepe-designer-salwar-suit-ssus0017043_maroon_1.jpg?v=1633862838"
          }
          title={"Salwar Kamej"}
        />
        <ProductCardHome
          img={
            "https://parlez.co.uk/cdn/shop/products/PARHS23-PRODUCTPHOTOGRAPHY-T-SHIRTS-HULLT-SHIRT-DUSTYAQUA-1_1080x.jpg?v=1680539963"
          }
          title={"T Shirt For Men"}
        />
        <ProductCardHome
          img={
            "https://parlez.co.uk/cdn/shop/products/PARHS23-PRODUCTPHOTOGRAPHY-T-SHIRTS-HULLT-SHIRT-DUSTYAQUA-1_1080x.jpg?v=1680539963"
          }
          title={"T Shirt For Men"}
        />
      </Carousel>
      ;
    </Box>
  );
};

export default AllProductsSlide;
