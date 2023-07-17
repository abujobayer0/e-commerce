import { useTheme } from "@mui/material";

const SecondaryButton = () => {
  const theme = useTheme();
  return (
    <div className="absolute top-0 group flex justify-center items-center h-full w-full">
      <button
        className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
        style={{ color: theme.palette.font.olive }}
      >
        Buy Now
      </button>
      <div
        className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36  bg-opacity-50"
        style={{ background: theme.palette.customColor.buttonBg }}
      ></div>
    </div>
  );
};

export default SecondaryButton;
