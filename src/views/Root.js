import { Outlet } from "react-router-dom";
import ResponsiveAppBar from './components/nav';
import Footer from "./components/footer";
import { Box } from "@mui/material";

function Root() {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
            <ResponsiveAppBar />
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Root;