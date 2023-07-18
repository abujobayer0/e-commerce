import { Box, IconButton, Typography, useTheme } from "@mui/material";

import { ArrowRightAlt, LocationCity } from "@mui/icons-material";

const PopularShops = ({ img, title }) => {
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
            fontSize: { xs: 16, md: 20 },
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
          <IconButton>
            <LocationCity />
          </IconButton>
          <Typography sx={{ fontSize: { xs: 12, md: 16 } }}>
            Dhaka,Bangladesh
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
          <IconButton>
            <ArrowRightAlt />
          </IconButton>
          <Typography sx={{ fontSize: { xs: 12, md: 14 } }}>
            {" "}
            Visit Our Shop
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default PopularShops;
