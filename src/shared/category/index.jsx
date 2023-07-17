import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

const Trend = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.customColor.white, mt: 2, py: 2 }}>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-[15px] 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex title-before-border flex-col justify-start w-full text-left items-start ">
              <h1
                style={{ color: theme.palette.font.olive }}
                className="text-3xl text-left xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white"
              >
                Shop By Category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://www.bharatsthali.com/cdn/shop/products/1_d7c8eda1-995b-4397-8e4b-1ec80b5ff978_400x.jpg?v=1643278216"
                  alt="girl-image"
                />
                <button
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  style={{ color: theme.palette.font.olive }}
                >
                  Women
                </button>
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                  style={{ background: theme.palette.customColor.buttonBg }}
                ></div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
                    alt="shoe-image"
                  />
                  <button
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    style={{ color: theme.palette.font.olive }}
                  >
                    Shoes
                  </button>
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                    style={{ background: theme.palette.customColor.buttonBg }}
                  ></div>
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                    alt="watch-image"
                  />
                  <button
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    style={{ color: theme.palette.font.olive }}
                  >
                    Watches
                  </button>
                  <div
                    className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                    style={{ background: theme.palette.customColor.buttonBg }}
                  ></div>
                </div>
              </div>

              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img
                  className="object-center object-cover h-full w-full"
                  src="https://admin.qriusbd.com/media/__sized__/products/_DSC2482-_JbFSel8-crop-c0-5__0-5-566x850-90.JPG"
                  alt="girl-image"
                />
                <button
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  style={{ color: theme.palette.font.olive }}
                >
                  Mens
                </button>
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                  style={{ background: theme.palette.customColor.buttonBg }}
                ></div>
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://admin.qriusbd.com/media/__sized__/products/_DSC2482-_JbFSel8-crop-c0-5__0-5-566x850-90.JPG"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  style={{ color: theme.palette.font.olive }}
                >
                  Mens
                </button>
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-opacity-50"
                  style={{ background: theme.palette.customColor.buttonBg }}
                ></div>
              </div>
              <div className="relative group hidden justify-center items-center h-full w-full mt-4 md:flex md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://admin.qriusbd.com/media/__sized__/products/_DSC2482-_JbFSel8-crop-c0-5__0-5-566x850-90.JPG"
                  alt="girl-image"
                />
                <img
                  className="object-center object-cover h-full w-full md:hidden"
                  src="https://admin.qriusbd.com/media/__sized__/products/_DSC2482-_JbFSel8-crop-c0-5__0-5-566x850-90.JPG"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button
                  className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  style={{ color: theme.palette.font.olive }}
                >
                  Mens
                </button>
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
                  style={{ background: theme.palette.customColor.buttonBg }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Trend;
