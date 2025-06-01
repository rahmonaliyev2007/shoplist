
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/useToken'

const PublicRoute = () => {
	const token = useAuthStore(state => state.token)
	const isAuthenticated = !!token

	return !isAuthenticated ? <Outlet /> : <Navigate to='/' replace />
}

export default PublicRoute
