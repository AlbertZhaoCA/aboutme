import { useGetGitInfo } from "../controller/useGitInfo";
import { useState } from "react";
import { animated } from '@react-spring/web';
import useFadeInUp from '../controller/animation/fadeInup';
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Hidden, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Char from './components/char';



function About() {
    const animationProps = useFadeInUp();
    const [shown, setShown] = useState(true);
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
                            <animated.div style={animationProps}>
                                <Typography variant="h6" color="primary" align="center">
                                    Hi, I am Albert, a CS student at Kean University interested in <span style={{ fontWeight: 'bold' }}>HCI</span>, <span style={{ fontWeight: 'bold' }}>NLP</span>, and <span style={{ fontWeight: 'bold' }}>Software Architecture</span>. The illustration below shows the frequency of languages I have used. 🥳
                                    <br />
                                    <br />
                                    IMO, my development experiences have taught me to <span style={{ fontWeight: 'bold' }}>write reusable code</span>, generate ideas, optimize them specifically, and avoid reinventing the wheel. <span style={{ fontWeight: 'bold' }}>Simplicity is better than complexity</span>.
                                    Do not be a religious zealot to any language or programming paradigm, btw, <span style={{ fontWeight: 'bold' }}>functional programming is very handy and perfect for you to try</span>. 🥺
                                    <br />
                                    <br />
                                    Lastly, I just want to show my love to my honey. 😘 I hope you can always be the first-class citizen, my dear <span style={{ fontWeight: 'bold' }}>functional programming</span>!
                                </Typography>
                            </animated.div>
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

                            {error && shown &&
                                //decide it latter whether use redux to deal with the state, or just useState
                                <Alert severity="error" onClose={() => { setShown(false) }}>
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