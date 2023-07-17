import { Box, useTheme } from "@mui/material";
import { ProductCardHome } from "../../components";

const PopularProducts = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.customColor.white, py: 2 }}>
      <div className="flex flex-col justify-center py-12 items-center ">
        <h1
          style={{ color: theme.palette.font.olive }}
          className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white"
        >
          Popular Products
        </h1>
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          gap: 2,
        }}
      >
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
      </Box>
    </Box>
  );
};

export default PopularProducts;
