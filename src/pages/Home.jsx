import { Button, useTheme } from "@mui/material";


const Home = () => {
    const theme=useTheme()
    return (
        <div>
            This is home
            <Button variant="contained" sx={{color:theme.palette.font.primary}} >Home Button</Button>
        </div>
    );
};

export default Home; 