import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";

const AddToCartButton = () => {
  return (
    <Button variant="contained" sx={{ color: "#fff" }}>
      Add to Cart <ShoppingCart />
    </Button>
  );
};

export default AddToCartButton;
