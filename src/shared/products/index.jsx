import { Box, useTheme } from "@mui/material";
import { ProductCardHome } from "../../components";

const PopularProducts = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.customColor.white,
        px: { xs: "10px", md: "15px" },
        py: 2,
      }}
    >
      <div className="flex flex-col title-before-border justify-start py-12 items-start ">
        <h1
          style={{ color: theme.palette.font.olive }}
          className="text-3xl  xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white"
        >
          Popular Products
        </h1>
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xl: "repeat(5, 1fr)",
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            xs: "repeat(2, 1fr)",
          },
          gridAutoRows: "1fr",
          gap: 2,
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
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
      </Box>
    </Box>
  );
};

export default PopularProducts;
