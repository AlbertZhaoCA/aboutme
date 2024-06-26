import { useLocation, useNavigate, Outlet ,Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export default function RequireAuth() {
  const auth = useSelector(state => state.auth);// bad code, revise it later, cause the auth is depend on log in, but here we just use log in to verify the user
  const [status,setStatus] = useState('pending');


  useEffect(() => {
     fetch(`https://${process.env.REACT_APP_AUTH_URL}/verify`,
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: auth.user,
        }),
        credentials: 'include'
      }
     ).then(res=>{
      if(res.status ===200){
        setStatus('success');
      }else{
        setStatus('failure');
      }
     })
  }, []);
  
  const location = useLocation();

  return(
    status==='pending'?<div>Loading...</div>:
    status==='success'?
    <Outlet/>
     : <Navigate to="/albert/login" state={{ from: location }} replace />
  )

}