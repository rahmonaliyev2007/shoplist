import { User } from 'lucide-react'
import { NavLink } from 'react-router'
import { useNavStore } from '../../../store/useNavigate'

const HeaderNav = () => {
	const { isNav } = useNavStore()

	return (
		<nav
			className={`${
				isNav
					? 'md:max-w-[65px] md:min-w-[65px] '
					: 'md:max-w-[250px] md:min-w-[250px] '
			} bg-[#F9FAFB] dark:bg-gray-800 hidden md:flex     h-[calc(100vh-60px)] duration-300 shadow-lg dark:shadow-dark `}
		>
			<ul className={` dark:text-white px-[10px]   font-semibold w-full mt-[50px]`}>
				<li className='px-[5px] flex justify-center  rounded-[8px] py-[5px] hover:bg-gray-200 duration-300 w-full'>
				<NavLink to={'/profile'} className={`${isNav?'justify-center':'justify-start'} flex  w-full hover:text-violet-500 group duration-300 items-center gap-[5px] hover:justify-center transition-all `}>
						<User
							size={30}
							className=' fill-gray-700 dark:fill-white dark:text-white group-hover:fill-violet-500 duration-300'
						/>
						<span className={`${isNav ? 'hidden' : 'inline-block'}`}>
							Profile
						</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav
