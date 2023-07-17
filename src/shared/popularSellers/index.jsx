import { PopularShops } from "../../components";
import { Box, useTheme } from "@mui/material";

const PopularSellers = () => {
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
          Popular Shops
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
        <PopularShops
          img={
            "https://media-cdn.tripadvisor.com/media/photo-s/06/98/e1/a7/nhung-cloth-shop.jpg"
          }
          title={"Cloth Store"}
        />
        <PopularShops
          img={
            "https://thumbs.dreamstime.com/b/clothes-shop-shirt-hanged-stand-43380502.jpg"
          }
          title={"Royal Shop"}
        />
        <PopularShops
          img={
            "https://previews.123rf.com/images/fiphoto/fiphoto1405/fiphoto140503801/28568447-luxury-and-fashionable-brand-new-interior-of-cloth-store.jpg"
          }
          title={"Uttara Mall"}
        />
        <PopularShops
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQM3p7sFt4aT1uEkhLiWjYDUZHfjCeTDSlA&usqp=CAU"
          }
          title={"Saree Gallery"}
        />
        <PopularShops
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tFkjYbU_Ej94covrqyNRzMl_3CSQ3sSBY4B7fp9N2MrZ8Bjzba1b1QxlCqSPt8RcnCs&usqp=CAU"
          }
          title={"Kids Zone"}
        />
      </Box>
    </Box>
  );
};

export default PopularSellers;
