import { Route } from 'lucide-react'

import { BrowserRouter, Routes } from 'react-router'
import PrivateRoute from './hooks/PrivateRoute'
import PublicRoute from './hooks/PublicRoute'
import { useTheme } from './store/useThem'
import { useEffect } from 'react'
import AuthLayout from './layout/auth'
import Prifile from './page/Profile'
import DashboardLayout from './layout/dashboard'

function App() {

	const init = useTheme((state) => state.init);

	useEffect(() => {
    init(); 
  },[]);
	
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route element={<PublicRoute />}> */}
					<Route path='/' element={<AuthLayout/>} >
						<Route index path='/login' />
						<Route path='/register' />
					</Route>
				{/* </Route> */}
				

				{/* <Route element={<PrivateRoute />}> */}
					<Route path='/dashboard' element={<DashboardLayout/>}>
						<Route path='/profile' element={<Prifile/>} />
						<Route path='/group/:groupId' />
					</Route>
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App
