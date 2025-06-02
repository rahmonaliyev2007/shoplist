import { Bell, LogOut, Menu, Moon, Sun } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useNavStore } from '../../../store/useNavigate'
import { useTheme } from '../../../store/useThem'
import { useAuthStore } from '../../../store/useToken'

const HeaderTop = () => {
	const { toggleIsNav } = useNavStore()
	const { isDark, toggleTheme } = useTheme()
	const navigate = useNavigate()
	const { clearToken } = useAuthStore()
	const logOut = async () => {
		await clearToken()
		navigate('/')
	}

	return (
		<header className='h-[60px]  dark:bg-gray-800 dark:shadow-dark gap-[20px] pl-[5px] pr-[15px] flex justify-between items-center w-full bg-[#F9FAFB] shadow-lg '>
			<div className='left flex items-center h-full md:gap-[20px] md:w-[450px] md:justify-between'>
				<Link to={'/profile'} className='flex items-center h-full w-full '>
					<div className='logo h-[50px] w-[50px]'>
						<img src='/logo.png' alt='logo' className='w-full h-full' />
					</div>
					<h2 className='font-bold text-nowrap text-violet-500 md:block hidden text-[25px]'>
						Shop List
					</h2>
				</Link>
				<button
					onClick={toggleIsNav}
					className='px-[10px] hidden md:block py-[10px] text-white rounded-[6px] bg-violet-400'
				>
					<Menu />
				</button>
			</div>

			<div className='search w-full text-center md:block md:px-[50px]'>
				<input
					type='text'
					placeholder='search'
					className='
								w-full 
								px-4 py-2 
								rounded-md 
								bg-white 
								text-gray-900 
								shadow-md   
								placeholder-gray-400
								dark:bg-gray-700  
								dark:text-white 
								dark:placeholder-gray-400 
								dark:shadow-lg 
								focus:outline-none 
								focus:ring-0
								focus:shadow-[0_0_5px_2px_rgba(139,92,246,0.4)]
								transition
							'
				/>
			</div>

			<div className='icons flex md:gap-[30px] gap-[5px]'>
				<div
					onClick={toggleTheme}
					className=' text-gray-700  p-[5px] dark:hover:bg-violet-400 hover:bg-gray-200 rounded-[6px] duration-300 '
				>
					{isDark ? (
						<Sun className='fill-gray-700 dark:fill-white dark:text-white' />
					) : (
						<Moon className='fill-gray-700 dark:fill-white dark:text-white' />
					)}
				</div>
				<div className='text-gray-700  dark:hover:bg-violet-400 p-[5px] hover:bg-gray-200 rounded-[6px] duration-300 '>
					<Bell className='fill-gray-700 dark:fill-white dark:text-white' />
				</div>
				<div
					className='text-gray-700 dark:hover:bg-violet-400 p-[5px] hover:bg-gray-200 rounded-[6px] duration-300 '
					onClick={logOut}
				>
					<LogOut className='  dark:text-white' />
				</div>
			</div>
		</header>
	)
}

export default HeaderTop
