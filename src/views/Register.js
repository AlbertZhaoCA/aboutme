import { Container, Paper, Typography } from "@mui/material";
import { useState} from "react";
import { Link } from "react-router-dom";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import useAuth from "../controller/useAuth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setRegisterInfo } from "../stateManagement/authSlice";
import PasswordIcon from '@mui/icons-material/Password';
import Box from "@mui/material/Box";





const Register = () => {
    const auth = useSelector(state => state.auth);
    const { register } = useAuth();
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [secondPassword, setSecondPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(auth.registerInfo.password, secondPassword)
        if (auth.registerInfo.password !== secondPassword) {
            dispatch(setRegisterInfo({ ...auth.registerInfo, password: '' }));
            alert('Passwords do not match');
            return;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(auth.registerInfo.password)) {
            alert('Password does not meet the requirements. It must contain letters and numbers, and be at least 8 characters long.');
            return;
        }
        const res = await register();
        dispatch(setRegisterInfo({ user: '', password: '' }));
        if (res === null) {
            alert('Sooory 🥺, but login failed, cause there are some internet issues or the server is down 🤯.');
        } else {
            alert(res.status);
            setSuccess(true);
        }
    }


    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={10} sx={{ padding: '40px', margin: '40px', minWidth: '300px' }}>
                {success ? (
                    <section>
                        <Typography>Success!</Typography>
                        <p>
                            <Link to="/albert/login">Login</Link>
                        </p>
                    </section>
                ) : (
                    <section>
                        <Typography variant='h4' color='primary.second'>Register</Typography>
                        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                            <Typography variant="body1" color="primary.second" sx={{ width: '25ch' }}>
                                Password must contain at least 8 characters, including letters and numbers.
                            </Typography>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

                                <InputLabel htmlFor="account">Account</InputLabel>

                                <Input
                                    name="username"
                                    id="account"
                                    type='text'
                                    value={auth.registerInfo.user}
                                    onChange={(e) => {
                                        dispatch(setRegisterInfo({ ...auth.registerInfo, user: e.target.value }))
                                    }
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <AccountCircle sx={{ marginRight: '6px' }} />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

                                <InputLabel htmlFor="standard-adornment-password">Password </InputLabel>
                                <Input
                                    value={auth.registerInfo.password}
                                    name="password"
                                    id="standard-adornment-password"
                                    type={'password'}
                                    onChange={(e) => {
                                        dispatch(setRegisterInfo({ ...auth.registerInfo, password: e.target.value }))
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <PasswordIcon sx={{ marginRight: '6px' }} />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="second-password">Confirm Password</InputLabel>
                                <Input
                                    id="second-password"
                                    type="password"
                                    value={secondPassword}
                                    onChange={(e) => setSecondPassword(e.target.value)}
                                    label="Confirm Password"
                                />
                            </FormControl>
                            <Button type="submit" sx={{ marginTop: '20px' }} variant="contained" endIcon={<SendIcon />}>Submit
                            </Button>
                        </form>
                        <Box marginTop='20px' textAlign="center">
                            <Typography color='primary.main' variant="h6">
                                Already registered?<br />
                                <span >
                                    <Link to="/albert/login">Sign In</Link>
                                </span>
                            </Typography>
                        </Box>
                    </section>
                )}
            </Paper>
        </Container>
    )
}

export default Register
