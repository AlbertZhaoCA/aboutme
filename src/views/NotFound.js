import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect } from 'react';

/**
 * 
 * 
 * 404 Not Found page
 * redirect to /albert after 3s
 * 
 */
function NotFound() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/albert";
        }, 3000)
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div >
            <Container >
                <Box marginTop={4}>
                    <Typography variant="h1"
                        component="h1"
                        gutterBottom
                        align='center'> 404 Not Found</Typography>
                    <img src="/404.jpeg" alt="404 Not Found" className='centerImg' />
                </Box>
                <Box marginTop={4}>
                    <LinearProgress />
                    <Typography variant="body1"
                        component="h1"
                        gutterBottom
                        align='center'> 不好意思，此资源不存在，3s后将为你重定向
                    </Typography>
                </Box>

            </Container>

        </div>
    );
};

export default NotFound;