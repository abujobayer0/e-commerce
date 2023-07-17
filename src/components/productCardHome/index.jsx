import { Box, IconButton, Typography, useTheme } from "@mui/material";
import AddToCartButton from "../addToCartButton";
import { RemoveRedEye } from "@mui/icons-material";

const ProductCardHome = ({ img, title }) => {
  const theme = useTheme();
  return (
    <div className="mx-auto text-left w-full">
      <div className="bg-white w-full md:w-full  pb-5 transition shadow hover:shadow-lg border">
        <div className="w-full h-60 overflow-hidden lg:h-52">
          <img
            src={img}
            alt="product"
            className="w-full  object-fill md:object-cover lg:object-fill h-60 lg:h-52 duration-150 transition scale-[95%] hover:scale-100 ease-in-out"
          />
        </div>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.font.product.title,
            px: 2,
            pt: 1,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
          <Typography>Price:</Typography>
          <Typography
            variant="span"
            sx={{
              color: theme.palette.font.product.secondary,
            }}
            className="px-2 line-through "
          >
            ৳‎ 1,000
          </Typography>
          <Typography
            variant="span"
            sx={{
              color: theme.palette.font.product.price,
            }}
            className="px-2"
          >
            ৳‎1,000
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            px: 2,
            mt: 1,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <AddToCartButton />

          <IconButton>
            <RemoveRedEye />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default ProductCardHome;
