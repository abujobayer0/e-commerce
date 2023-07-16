import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { TrendingProductCard } from '../../components';


const Trend = () => {
    const theme=useTheme()
    return (
     <Box sx={{background:theme.palette.customColor.white,mt:2,py:2}}>
    <TrendingProductCard/>
     </Box>
    );
};

export default Trend;