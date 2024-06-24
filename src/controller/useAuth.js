import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../stateManagement/authSlice';

export default function useAuth(params) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    async  function register(){
       const res = await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: auth.user,
            password: auth.password
        })

    })
    if (!res.ok) {
        dispatch(setUser({ user: null, status:'faliure' }));
        return;
    }

    const data = await res.json();
    dispatch(setUser({ user: data.user, status: data.status }));
    }

    async function login(){
        const res = await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: auth.user,
                password: auth.password
            })
        })
        if (!res.ok) {
        dispatch(setUser({ user: null, status: 'failure' }));
        return null;
    }

    // 登录成功，服务器应设置 HTTP-only cookie
    // 客户端不需要处理 cookie，但可以根据需要更新状态
    dispatch(setUser({ user: res.user, status: res.status }));
    return { user: res.user, status: res.status }
    }

    return {register, login}
    
};
