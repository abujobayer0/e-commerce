import { Button, Typography, useTheme } from "@mui/material";


const Home = () => {
    const theme=useTheme()
    return (
        <div>
            <Button variant="contained" sx={{color:theme.palette.font.primary,fontSize:theme.typography.headline}} >Home Button</Button>
            <Typography variant="h1">Headline Text</Typography>
      <Typography variant="h2">Subheadline Text</Typography>
      <Typography variant="h3">Paragraph Text</Typography>
        </div>
    );
};

export default Home; 