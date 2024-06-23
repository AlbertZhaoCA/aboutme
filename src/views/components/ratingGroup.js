import { Box, IconButton } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function RatingGroup({height='inhirent', width='inhirent',onLike,onDislike}) {
    return (
        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-between',height,width}}>
          
            <IconButton onClick={onLike} color="primary" aria-label="like">
            <SentimentVerySatisfiedIcon/>
          </IconButton>

          <IconButton onClick={onDislike} color="primary" aria-label="dislike">
            <SentimentVeryDissatisfiedIcon/>
          </IconButton>
        </Box>
    );
}