import { Box, Typography, useTheme } from "@mui/material";
import { SellerPanelSideBar } from "../components";

const SellerPanel = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        color: theme.palette.font.primary,
      }}
    >
      <Box
        sx={{
          display: "flex",
          py: 1,
          width: "100%",
          background: theme.palette.primary.main,
          px: "25px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h4">Hello</Typography>
        </Box>
        <SellerPanelSideBar />
      </Box>
      <Box
        sx={{
          px: "25px",
          py: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SellerPanel;
