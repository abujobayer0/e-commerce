import { ShoppingCart } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const AddToCartButton = () => {
  return (
    <Button
      variant="contained"
      sx={{ color: "#fff", fontSize: { xs: 12, md: 15 } }}
    >
      <Typography variant="p" sx={{ display: "flex" }}>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Add to Cart
        </Typography>

        <ShoppingCart sx={{ fontSize: { xs: 18, md: 25 } }} />
      </Typography>
    </Button>
  );
};

export default AddToCartButton;
