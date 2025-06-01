import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useToken'


const PrivateRoute = () => {
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = !!token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
