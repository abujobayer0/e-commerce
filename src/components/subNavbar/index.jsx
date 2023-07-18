import { useTheme, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState(""); // State to keep track of the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full hidden md:block">
      <div className="flex flex-row gap-10 justify-end my-2 pe-10">
        <Typography
          variant="p"
          sx={{
            color:
              activeLink === "about" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "about" ? "2px solid #94B49F" : "none", // Add bottom border for active link
          }}
          onClick={() => handleLinkClick("about")}
        >
          About Us
        </Typography>
        <Typography
          variant="p"
          sx={{
            color:
              activeLink === "contact-us"
                ? "#94B49F"
                : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom:
              activeLink === "contact-us" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("contact-us")}
        >
          Contact Us
        </Typography>
        <Link to={"/seller"}>
          <Typography
            variant="p"
            sx={{
              color:
                activeLink === "contact-us"
                  ? "#94B49F"
                  : theme.palette.font.secondary,
              "&:hover": { color: "#94B49F" },
              borderBottom:
                activeLink === "contact-us" ? "2px solid #94B49F" : "none",
            }}
            onClick={() => handleLinkClick("contact-us")}
          >
            Seller Panel
          </Typography>
        </Link>
        <Typography
          variant="p"
          sx={{
            color:
              activeLink === "order" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "order" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("order")}
        >
          Your Orders
        </Typography>

        <Typography
          variant="p"
          sx={{
            color:
              activeLink === "login" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "login" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("login")}
        >
          Login / Sign Up
        </Typography>
      </div>
    </div>
  );
};

export default SubNavBar;
