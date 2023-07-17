import { Typography, useTheme } from "@mui/material";

const ProductCardHome = () => {
  const theme = useTheme();
  return (
    <div className="text-center">
      <div className="bg-white w-64 m-5 pb-5 transition shadow hover:shadow-lg border">
        <div className="w-full h-52">
          <img
            src="https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ="
            className="w-full h-52 transition scale-[95%] hover:scale-100 ease-in-out"
          />
        </div>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.font.product.title }}
          className="pt-4"
        >
          Jamdani Saree
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
          <button className="bg-olive-600 text-white px-4 py-2 rounded-md transition-all hover:shadow-md scale-[95%] hover:scale-100">
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProductCardHome;
