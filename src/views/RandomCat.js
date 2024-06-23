import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '../controller/useMeadiaQuery';
import RatingGroup from './components/ratingGroup';
import { Typography } from '@mui/material';

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
    const [seen, setSeen] = useState(0);
    const meme_id = useRef(0);
    const [like, setLike] = useState(0);
    const styles = useMediaQuery(picStyles, queriedStyles);

    console.log(meme_id.current)


    const getImg = async (meme_url) => {
          fetch(`https://${process.env.REACT_APP_CAT_API_URL}/public/cat/${meme_url}`).then(
             response=>{return response.blob()})
            .then(blob => {
                const imgURL = URL.createObjectURL(blob);
                setImgSrc(imgURL);
            }) .catch(error => alert("sorry, it seems the server is down 🥹"));;
    }

    const handleLike = async () => {
        try {
            const res = await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/cat/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    meme_id: meme_id.current,
                    meme_url: imgSrc,
                })
            });
            const data = await res.json();
            setLike(data[0]['people_like']);
        } catch (error) {
            console.error('Error:', error); 
        }
    };
    const handleDisLike= async() => {
        await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/cat/dislike`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                meme_id: meme_id.current,
                meme_url: imgSrc,
            })
             
        });
    };
    
    const handleClick = () => {
    fetch(`https://${process.env.REACT_APP_CAT_API_URL}/cat`)
                    .then(response => {
                    return  response = response.json();})
                .then(data => {
                    console.log(data)
                    setLike(data.people_like);
                    meme_id.current = data.meme_id;
                    setSeen(data.seen_counts);
                    getImg(data.meme_url);
                }).catch(error => alert("sorry, it seems the server is down 🥹"));
            
        };      

    useEffect(() => {
        fetch(`https://${process.env.REACT_APP_CAT_API_URL}/cat`)
                        .then(response => {
                          console.log(response)
                          return response = response.json();})
                    .then(data => {
                        console.log(data)
                        setLike(data.people_like);
                        meme_id.current = data.meme_id;
                        console.log(meme_id)
                        setSeen(data.seen_counts);
                        getImg(data.meme_url);
                    }).catch(error => alert("sorry, it seems the server is down 🥹"));
                
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
            <Typography variant='h6'>I have been seen by {seen} humen, 
                robots or any other species <br></br> and I was liked by {like} people, 
                robots, or any other species</Typography>
            <Box display='flex' gap={4} >
            {imgSrc && <img onClick={handleClick} style={styles} src={imgSrc} alt="Random Cat" />}
            <RatingGroup onLike = {handleLike} onDislike ={handleDisLike} height='100px'/>
            </Box>
        </Box>
    ); 
}