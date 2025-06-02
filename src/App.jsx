import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './layout/auth'
import DashboardLayout from './layout/dashboard'
import Group from './layout/dashboard/group'
import Prifile from './page/Profile'
import { useTheme } from './store/useThem'
import Login from './page/login/Login'
import Register from './page/register/Register'

function App() {
	const init = useTheme(state => state.init)

	useEffect(() => {
		init()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route element={<PublicRoute />}> */}
				<Route element={<AuthLayout />}>
					<Route  path='/' element={<Login />} />
		
					<Route path='/register' element={<Register />} />
				</Route>
				{/* </Route> */}

				{/* <Route element={<PrivateRoute />}> */}
				<Route element={<DashboardLayout />}>
					<Route path='/profile' element={<Prifile />} />
					<Route path='/group/:groupId' element={<Group />} />
				</Route>
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
