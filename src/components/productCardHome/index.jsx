import { Typography, useTheme } from "@mui/material";

const ProductCardHome = () => {
  const theme = useTheme();
  return (
    <div className="text-center">
      <div className="bg-white w-64 m-5 py-5 transition shadow hover:shadow-lg border">
        <img
          src="https://i1.wp.com/www.mobilebd.co/wp-content/uploads/2022/05/Samsung-Galaxy-J10-Official-Image.png?fit=500%2C500&ssl=1"
          className="w-full transition scale-[95%] hover:scale-100 delay-300"
        />
        <Typography
          variant="h6"
          sx={{ color: theme.palette.font.product.title }}
          className="pt-4"
        >
          Samsung Gallaxy J10
        </Typography>
        <p className="mt-1">
          <Typography
            variant="span"
            sx={{ color: theme.palette.font.product.price }}
          >
            $1,000
          </Typography>
        </p>
        <p className="mt-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md transition-all hover:shadow-md scale-[95%] hover:scale-100">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProductCardHome;
