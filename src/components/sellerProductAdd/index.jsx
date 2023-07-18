import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Input,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../utils/firebase.init";
const auth = getAuth(app);
const SellerProductAdd = () => {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    product_name: "",
    product_price: 0,
    discount_percent: 0,
    product_colors: "",
    seller_email: "",
    seller_name: "",
    shop_name: "",
    created_time: "",
    descriptions: "",
    shop_location: "",
    seller_avatar: "",
    seller_id: "",
    product_size: "",
    seller_phone: "",
    search_keywords: [],
  });
  const [selectedImage, setSelectedImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = async (event) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);

    return await fetch(
      "https://api.imgbb.com/1/upload?key=d99b11b2d8b76c3dfcc3411ca1ee32ca",
      { method: "POST", body: formData }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.display_url) {
          setIsLoading(false);
          setSelectedImages((prevImages) => [
            ...prevImages,
            data?.data?.display_url,
          ]);
          console.log(selectedImage);
        } else {
          throw new Error("Image upload failed");
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      product_name,
      product_price,
      discount_percent,
      product_colors,
      shop_name,
      descriptions,
      shop_location,
      seller_id,
      product_size,
      seller_phone,
      search_keywords,
    } = formData;

    fetch("http://localhost:5000/create/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product_name: product_name,
        product_price: product_price,
        discount_percent: discount_percent,
        product_colors: product_colors,
        seller_email: user?.email,
        seller_name: user?.displayName,
        shop_name: shop_name,
        created_time: new Date(),
        descriptions: descriptions,
        shop_location: shop_location,
        seller_avatar: user?.photoURL,
        seller_id: seller_id,
        product_size: product_size,
        seller_phone: seller_phone,
        product_images: selectedImage,
        search_keywords: search_keywords,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log({
      product_name: product_name,
      product_price: product_price,
      discount_percent: discount_percent,
      product_colors: product_colors,
      seller_email: user?.email,
      seller_name: user?.displayName,
      shop_name: shop_name,
      created_time: new Date(),
      descriptions: descriptions,
      shop_location: shop_location,
      seller_avatar: user?.photoURL,
      seller_id: seller_id,
      product_size: product_size,
      seller_phone: seller_phone,
      product_images: selectedImage,
      search_keywords: search_keywords,
    });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleKeywordChange = (event) => {
    const { name, value } = event.target;
    const keywords = value.split(",").map((keyword) => keyword.trim());
    setFormData((prevData) => ({
      ...prevData,
      [name]: keywords,
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Product Name"
            fullWidth
            required
            name="product_name"
            value={formData.product_name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            required
            label="Product Price"
            fullWidth
            name="product_price"
            value={formData.product_price}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            type="number"
            label="Discount Percent"
            fullWidth
            name="discount_percent"
            value={formData.discount_percent}
            onChange={handleInputChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </Grid> */}

        {/* <Grid item xs={6}>
          <TextField
            label="Seller Email"
            fullWidth
            name="seller_email"
            value={formData.seller_email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Seller Name"
            fullWidth
            name="seller_name"
            value={formData.seller_name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Shop Name"
            fullWidth
            name="shop_name"
            value={formData.shop_name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Created Time"
            fullWidth
            name="created_time"
            value={formData.created_time}
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item xs={6}>
          <TextField
            label="Descriptions"
            fullWidth
            required
            name="descriptions"
            value={formData.descriptions}
            onChange={handleInputChange}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            label="Shop Location"
            fullWidth
            name="shop_location"
            value={formData.shop_location}
            onChange={handleInputChange}
          />
        </Grid> */}
        {/* <Grid item xs={6}>
          <TextField
            label="Seller Avatar"
            fullWidth
            name="seller_avatar"
            value={formData.seller_avatar}
            onChange={handleInputChange}
          />
        </Grid> */}
        {/* <Grid item xs={6}>
          <TextField
            label="Seller ID"
            fullWidth
            name="seller_id"
            value={formData.seller_id}
            onChange={handleInputChange}
          />
        </Grid> */}
        {/* <Grid item xs={6}>
          <TextField
            label="Product Size"
            fullWidth
            name="product_size"
            value={formData.product_size}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Seller Phone"
            fullWidth
            name="seller_phone"
            value={formData.seller_phone}
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item xs={6}>
          <TextField
            label="Search Keywords"
            fullWidth
            required
            name="search_keywords"
            value={formData.search_keywords.join(", ")}
            onChange={handleKeywordChange}
            helperText="Enter keywords separated by commas"
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel htmlFor="image-selector">Select Images</InputLabel>
          <Input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            id="image-selector"
            inputProps={{ multiple: true }}
            sx={{ display: "none" }}
          />
          <label htmlFor="image-selector">
            <Button
              variant="contained"
              component="span"
              sx={{ color: "white" }}
            >
              Select Images
            </Button>
          </label>{" "}
          <Box
            sx={{
              display: "flex",
              position: "relative",
              gap: 2,
              m: 3,
              flexWrap: "wrap",
            }}
          >
            {selectedImage.map((imageUrl, index) => (
              <img
                key={index}
                className="w-20 h-20"
                src={imageUrl}
                alt={`Image ${index}`}
              />
            ))}
            {isLoading && <h1 className="text-black">Loading</h1>}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" sx={{ color: "white" }} variant="contained">
            ADD PRODUCT
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellerProductAdd;
