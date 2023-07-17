import { ShoppingCart } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const AddToCartButton = () => {
  return (
    <Button variant="contained" sx={{ color: "#fff" }}>
      <Typography variant="p">
        Add to Cart
        <ShoppingCart />
      </Typography>
    </Button>
  );
};

export default AddToCartButton;
