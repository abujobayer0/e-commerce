import { useTheme, Typography } from "@mui/material";
import { useState } from "react";

const SubNavBar = () => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState(""); // State to keep track of the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full hidden lg:block">
      <div className="flex flex-row gap-10 justify-end py-2">
        <Typography
          variant="p"
          sx={{
            color: activeLink === "home" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "home" ? "2px solid #94B49F" : "none", // Add bottom border for active link
          }}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "contact-us" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "contact-us" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("contact-us")}
        >
          Contuct Us
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "order" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "order" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("order")}
        >
          Order
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "products" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "products" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("products")}
        >
          Products
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "inbox" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "inbox" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("inbox")}
        >
          Inbox
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "mail" ? "#94B49F" : theme.palette.font.secondary,
            "&:hover": { color: "#94B49F" },
            borderBottom: activeLink === "mail" ? "2px solid #94B49F" : "none",
          }}
          onClick={() => handleLinkClick("mail")}
        >
          Mail
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: activeLink === "login" ? "#94B49F" : theme.palette.font.secondary,
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

