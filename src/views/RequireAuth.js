import { useLocation, useNavigate, Outlet ,Navigate} from 'react-router-dom';

export default function RequireAuth() {
  const auth = {
    email: '',
  }
  const location = useLocation();
  const navigate = useNavigate();

  return(
    auth?.id ?
    <Outlet/>
     : <Navigate to="/albert/login" state={{ from: location }} replace />
  )

}