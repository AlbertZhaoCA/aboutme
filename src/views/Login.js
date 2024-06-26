import { useState } from "react";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Typography } from "@mui/material";
import useAuth from "../controller/useAuth";
import { setLogInfo } from "../stateManagement/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Paper} from "@mui/material";

export default function Login() {
  const auth = useSelector(state => state.auth);
  const { login } = useAuth();
  const dispatch = useDispatch();
  return (
    <Container sx={{ marginTop: '50px', minHeight: '70vh', display: "flex", justifyContent: 'center' }}>
      <Paper sx={{padding:'40px',minWidth:'300px',maxHeight:'400px'}}>
      <Form dispatch={dispatch} auth={auth} login={login} />
      </Paper>
    </Container>
  )
};


function Form({ login, auth, dispatch }) {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login();
    dispatch(setLogInfo({ user: '', password: '' }));
    if (res === null) {
      alert('Sooory🥺, but login failed, cause there are some internet issues or the server is down 🤯.');
    } else {
      alert(res.status);
    }
  }

  return (
    <Box>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Typography variant="h4" sx={{ color: 'primary.main', marginBottom: '20px' }}>Login</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

          <InputLabel htmlFor="account">Account</InputLabel>

          <Input
            name="username"
            id="account"
            type='text'
            value={auth.logInfo.user}
            onChange={(e) => {
              dispatch(setLogInfo({ ...auth.logInfo, user: e.target.value }))
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

          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            value={auth.logInfo.password}
            name="password"
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              dispatch(setLogInfo({ ...auth.logInfo, password: e.target.value }))
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button type="submit" sx={{ marginTop: '20px' }} variant="contained" endIcon={<SendIcon />}>Submit
        </Button>
      </form>
      <Box marginTop='20px' textAlign="center">
        <Typography color='primary.main' variant="h6">Need an Account?<br /></Typography>
        <Button>
          <Link to="/albert/register">Sign Up</Link>
        </Button>
      </Box>
    </Box>
  )
}
