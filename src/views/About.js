import {useGetGitInfo} from "../controller/useGitInfo"
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Char from './components/char';

let data = {
    Java: 0.8,
    Python: 0.1,
    JavaScript: 0.5,

  
}

function About() {
    const {error,loading, gitInfo} = useGetGitInfo();
    console.log(gitInfo)
    console.log(loading)


    return (
        <div>
            {
            loading&&
            <Box>
                <CircularProgress />
                <Typography>
                It takes long, but we ara almost there...😘
                </Typography>
            </Box>
            }

            {error&&
            //decide it latter whether use redux to deal with the state, or just useState
                <Alert severity="error" onClose={() => {console.log("what")}}>  
                Oh no! It seems there is some internet issue, the data cannot be fetched
                at now, please refresh to see whether the issue got resolved 🥹
                </Alert>
            }
            {!loading && gitInfo && 
            <Box>
                  <Char data={gitInfo}/>
            </Box>

            }
      </div>
    );
};

export default About;