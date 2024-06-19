import { useGetGitInfo } from "../controller/useGitInfo"
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Char from './components/char';



function About() {
    const { error, loading, gitInfo } = useGetGitInfo();
    console.log(gitInfo)
    console.log(loading)


    return (
        <div>
            <Container>
                <Grid container spacing={1} column={12}>
                    <Grid sm={12} xs={12} md={4}>
                        <Avatar sx={{ width: 150, height: 150, margin: 'auto', marginTop: '20px' }} alt="albert's avatar🫣" src="/avatar.jpeg" />
                    </Grid>
                    <Grid sm={12} xs={12} md={8}>
                        <Paper sx={{ marginTop: '20px', minHeight: "100px" }} elevation={4}>
                            <Typography variant="h6" color="primary" align="center">
                                Hi, I am Albert, a CS student at Kean University Interest in HCI, NLP, and Software Architecture, the picture is  the frequency of the language I have used. 🥳
                               I just wnana say, fuctional programming is the best, and I am a big fan of it. 😘 Hope you can always be the first class citizen, my function baby!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid xs={12} md={12} mdOffset={4}>
                        <Box sx={{ textAlign: 'center' }}>

                            {
                                loading &&
                                <Box>
                                    <CircularProgress />
                                    <Typography>
                                        It takes long, but we ara almost there...😘
                                    </Typography>
                                </Box>
                            }

                            {error &&
                                //decide it latter whether use redux to deal with the state, or just useState
                                <Alert severity="error" onClose={() => { console.log("what") }}>
                                    Oh no! It seems there is some internet issue, the data cannot be fetched
                                    at now, please refresh to see whether the issue got resolved 🥹
                                </Alert>
                            }
                            {!loading && gitInfo &&
                                <Box>
                                    <Char data={gitInfo} />
                                </Box>

                            }
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default About;