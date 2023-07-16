import { createTheme, } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#94B49F',
      },
      secondary: {
        main: '#ECB390', 
      },

      customColor: {
        light: '#CEE5D0',
        main: '#F44336',
        dark: '#B71C1C',
      },
     font:{
        primary:"#fff",secondary:"#D3E0E2"
     },
    },
  });

export default theme