import { Outlet } from "react-router-dom";
import ResponsiveAppBar from './components/nav';
import Footer from "./components/footer";
import { Box } from "@mui/material";

function Root() {
    return (
        <Box sx={{minHeight: "inherit", display: 'flex', flexDirection: 'column'}}>
            <Box sx={{flex:1}}>
            <ResponsiveAppBar />
            <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default Root;