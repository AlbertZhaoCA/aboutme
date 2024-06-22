import { Box, IconButton } from "@mui/material";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function RatingGroup({height='inhirent', width='inhirent'}) {
    return (
        <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-between',height,width}}>
            <IconButton color="primary" aria-label="like and dislike">
            <SentimentVerySatisfiedIcon/>
          </IconButton>
          <IconButton color="primary" aria-label="like and dislike">
            <SentimentVeryDissatisfiedIcon/>
          </IconButton>
        </Box>
    );
}