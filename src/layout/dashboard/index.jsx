
import { Outlet } from 'react-router'
import HeaderTop from '../../components/header/headerTop'
import HeaderNav from '../../components/header/headerLeft'


const DashboardLayout= () => {
	return (
		<div className='overflow-hidden '>
			<div className="w-full">
				<HeaderTop/>
			</div>
			<div className="flex">
				<div className="">
					<HeaderNav/>
				</div>
				<Outlet/>
			</div>
			
		</div>
	)
}

export default DashboardLayout
