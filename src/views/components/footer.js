import { Typography, Box } from "@mui/material";
import Gallary from "./gallary";

/**
 * 
 * Footer at the bottom of every page
 * show some contact info and copy right
 * 
 * btw, Typography is like a text wrapped in a <div> tag, so I use flexbox to align it
 * 
 * !rewrite! move list to models and write a logic get the gallary or just use this, cause the concat part seems never changed
 */

const list = [
    {
        url: "/github.svg",
        href: 'https://github.com/AlbertZhaoCA',
        alt: 'github',
    }, {
        url: "/linkedin.svg",
        href: 'https://www.linkedin.com/in/qinjian-zhao-a3615a24a/',
        alt: 'linkedin',
    },  {
        url: "/x.svg",
        href: 'https://x.com/QinjianZhao',
        alt: 'x',
    }
]

function Footer() {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1, marginTop: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }} variant='body1' align='center'>
                &copy; {new Date().getFullYear()} Albert
            </Typography>

            <Gallary list={list}/>
        </Box>
    )
}

export default Footer;