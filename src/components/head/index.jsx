import { Box, Typography, useTheme } from "@mui/material";

const Head = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", background: "#fff" }}>
      <Typography
        variant="h4"
        color={"primary"}
        sx={{
          display: { xs: "block", md: "none" },
          width: "200px",
          background: "#fff",
          p: "5px",
          fontFamily: "fantasy",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            width: 40,
            height: 4,
            background: theme.palette.font.olive,
            top: 25,
            left: 150,
          },
          margin: "0 auto",
          "&::after": {
            content: '""',
            position: "absolute",
            width: 40,
            height: 4,
            background: theme.palette.font.olive,
            top: 25,
            right: 150,
          },
        }}
      >
        Hello
      </Typography>
    </Box>
  );
};

export default Head;
