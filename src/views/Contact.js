import { Alert, CardContent, CardHeader, CardMedia, Container } from "@mui/material";
import Card from '@mui/material/Card';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { Menu, MenuItem } from '@mui/material';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import { animated } from "@react-spring/web";
import  useFadeInUp  from "../controller/animation/fadeInup";


/*
 * the contact content is complex enough to use redux, rewrite it latter :),
 * and also remember to abstract the sent button for reuse when you are free,
 * I am SO LAZYYYYY !!! 😭
 */

function Contact() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const animationProps  = useFadeInUp();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setInputValue('');     
    };

    return (
        <animated.div style={animationProps}>
        <Container sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: { xs: '100%', sm: '50%', md: '40%' } }}>
                <CardMedia sx={{ height: '290px' }} image="/avatar.jpeg" >
                </CardMedia>
                <CardHeader action={  <div >
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>We-Chat</MenuItem>
                            <MenuItem onClick={handleClose}>Email</MenuItem>
                            <MenuItem onClick={handleClose}>WhatsAPP</MenuItem>
                        </Menu>
                    </div>
                    }
                    avatar={
                        <ConnectWithoutContactIcon />
                    }
                    title="Contact Me Thr"
                    sx={{ color: 'primary.main' }}
                    titleTypographyProps={{ variant: 'h4' }}>

                </CardHeader>
                <CardContent >
                    <TextField onChange={handleChange}   value={inputValue}  id='contact' label="leave whatever you wanna say to me" multiline maxRows={5}    sx={{ width: '100%',marginBottom:'20px'}} />
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon/>}>
                             Submit
                     </Button>
                </CardContent>
            </Card>

        </Container>
        </animated.div>
    );
};

export default Contact;