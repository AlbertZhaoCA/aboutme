import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../stateManagement/authSlice';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function useAuth() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    async  function register(){
       const res = await fetch(`https://${process.env.REACT_APP_AUTH_URL}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: auth.registerInfo.user,
            password: auth.registerInfo.password,
        }),
        credentials: 'include' 


    })
    if (!res.ok) {
        dispatch(setUser({ user: null, status:'faliure' }));
        return null;
    }

    const data = await res.json();
    dispatch(setUser({ user: data.user, status: data.status }));
    return { user: data.user, status: data.status }
    }

    async function login(){
        const res = await fetch(`https://${process.env.REACT_APP_AUTH_URL}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: auth.logInfo.user,
                password: auth.logInfo.password
            }),
            credentials: 'include'
        })
        if (!res.ok) {
        dispatch(setUser({ user: null, status: 'failure' }));
        return null;
    }
    
    const data = await res.json();
    dispatch(setUser({ user: res.user, status: res.status }));
    navigate(from);
    return { user: data.user, status: data.status }
    }

    return {register, login}
    
};
