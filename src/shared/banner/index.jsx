import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "./styles.css";
import { SecondaryButton } from "../../components";

const Banner = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        background: theme.palette.customColor.white,
        minHeight: { xs: "400px", md: "600px" },
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1610030469839-f909584b43f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Nature 1"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1597983073512-90bd150e19f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Nature 2"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Nature 3"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/8364116/pexels-photo-8364116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 4"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 6"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 7"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/2060241/pexels-photo-2060241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 8"
            />
            <SecondaryButton />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.pexels.com/photos/8483673/pexels-photo-8483673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature 9"
            />
            <SecondaryButton />
          </SwiperSlide>
        </Swiper>
      </Box>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${
            isMediumScreen ? "center right" : "right top"
          }`,
        }}
        className="pb-10 md:pb-0 md:py-10  relative mx-4 md:mx-0 md:px-2 text-center"
      >
        <h1
          style={{ color: theme.palette.font.olive }}
          className="text-4xl bg-transparent md:text-6xl font-bold mb-4 tracking-wide"
        >
          Shop-to-Door Fast Product Delivery
        </h1>
        <h2 className="text-xl bg-transparent md:text-2xl mb-4 opacity-75">
          Your One-Stop E-Commerce Solution
        </h2>
        <p className="text-sm md:text-md bg-transparent md:text-lg text-gray-500 mx-auto max-w-xl">
          Experience the convenience of quick and reliable delivery services
          right at your doorstep. Shop with confidence and get your favorite
          products delivered in no time.
        </p>
      </div>
    </Box>
  );
};

export default Banner;
