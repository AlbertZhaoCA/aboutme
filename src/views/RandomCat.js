import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '../controller/useMeadiaQuery';
import { height, width } from '@mui/system';

let picStyles = {
    width: '200px',
    height: '200px'

};

let queriedStyles = {
    sm: {
        width: '300px',
        height: "300px",
    },
    md: {
        width: '450px',
        height: "450px",
    },
    lg: {
        width: '600px',
        height: "600px",
    }
};



export default function RandomCat() {
    const [imgSrc, setImgSrc] = useState(null);
    const styles = useMediaQuery(picStyles, queriedStyles);
    console.log(styles);

 const handleClick = () => {
    fetch(`http://${process.env.REACT_APP_CAT_API_URL}/cat`)
                    .then(response => response.blob())
                .then(blob => {
                    const imgURL = URL.createObjectURL(blob);
                    setImgSrc(imgURL);
                }) .catch(error => alert("sorry, it seems the server is down 🥹"));
            };

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_CAT_API_URL}/cat`)
                    .then(response => response.blob())
            .then(blob => {
                const imgURL = URL.createObjectURL(blob);
                setImgSrc(imgURL);
            }) .catch(error => alert("sorry, it seems the server is down 🥹"));
    }, []);

    return (
        <Box
            my={15}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={4}
            p={2}
        >
            {imgSrc && <img onClick={handleClick} style={styles} src={imgSrc} alt="Random Cat" />}
        </Box>
    );
}