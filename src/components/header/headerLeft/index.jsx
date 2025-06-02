import { ChevronDown, MessageCircle, Plus, User } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavStore } from '../../../store/useNavigate'
import CreateGroupModal from '../../creatGroupModal'

import getGroups from '../../../service/getGroups'


const HeaderNav = () => {
	const { isNav } = useNavStore()
	const [isOpen, setIsOpen] = useState(true)
	const { data: groups, isLoading } = getGroups()

	const [isModalOpen, setIsModalOpen] = useState(false)
	


	return (
		<nav
			className={`${
				isNav
					? 'md:max-w-[65px] md:min-w-[65px] '
					: 'md:max-w-[250px] md:min-w-[250px] '
			} bg-[#F9FAFB] w-[65px] dark:bg-gray-800 flex h-[calc(100vh-60px)] duration-300 shadow-lg dark:shadow-dark`}
		>
			<ul
				className={` dark:text-white px-[10px]  flex flex-col gap-[10px]  font-semibold w-full mt-[50px]`}
			>
				{isModalOpen && (
					<CreateGroupModal
						isNav={isNav}
						onClose={() => setIsModalOpen(false)}
					/>
				)}
				<li className=''>
					<NavLink
						to={'/profile'}
						className={`${
							isNav ? 'md:justify-center' : 'md:justify-start'
						} flex  w-full hover:text-violet-500 dark:hover:text-white   duration-300 items-center gap-[5px]  transition-all px-[5px]  dark:shadow-dark group  rounded-[8px] py-[5px] hover:bg-gray-200  shadow-lg justify-center  dark:hover:bg-violet-400`}
					>
						<User
							size={30}
							className=' fill-gray-700 dark:fill-white dark:text-white dark:group-hover:fill-white group-hover:fill-violet-500  duration-300 '
						/>
						<span
							className={`${isNav ? 'md:hidden' : 'md:inline-block'} hidden `}
						>
							Profile
						</span>
					</NavLink>
				</li>

				<li className='bg-gray-100  dark:shadow-dark shadow-lg rounded-[8px]  dark:bg-gray-800'>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='flex items-center justify-between w-full px-3 py-2   rounded-md hover:bg-gray-200 dark:hover:bg-violet-400 dark:hover:text-white  transition duration-300 hover:text-violet-500'
					>
						<span className='flex items-center gap-2'>
							<MessageCircle size={18} />
							<span
								className={`${isNav ? 'md:hidden' : 'md:inline-block'} hidden`}
							>
								Groups
							</span>
						</span>
						<ChevronDown
							size={16}
							className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${
								isNav ? 'md:hidden' : 'md:inline-block'
							} hidden`}
						/>
					</button>
				</li>
				<li
					className={`transition-all ${
						isNav ? '' : 'md:pl-[30px]'
					}    duration-300   ${
						isOpen
							? 'opacity-100 max-h-20 mt-2'
							: 'opacity-0 max-h-0 overflow-hidden'
					}`}
				>
					<button
						className='flex items-center hover:text-violet-400 duration-300 gap-2 px-3 dark:text-white dark:hover:bg-violet-400 py-2 w-full shadow-lg dark:bg-gray-800 bg-gray-100 rounded-md dark:shadow-dark hover:bg-gray-200 transition'
						onClick={() => {
							setIsModalOpen(true)
						}}
					>
						<Plus size={18} />
						<span
							className={`${isNav ? 'md:hidden' : 'md:inline-block'} hidden`}
						>
							Create Group
						</span>
					</button>
				</li>

				<div className=' overflow-y-auto'>
					{isLoading
						? Array.from({ length: 3 }).map((_, i) => (
								<li
									key={`skeleton-${i}`}
									className='flex items-center md:pl-[30px] gap-2 md:px-3 md:py-2 w-full rounded-md shadow-lg dark:bg-gray-800 bg-gray-100 animate-pulse'
								>
									<div className='h-[40px] w-[50px]   bg-gray-300 dark:bg-gray-700 rounded'></div>
									<div className='hidden h-[40px] md:block bg-gray-300 w-full dark:bg-gray-700 rounded '></div>
								</li>
						  ))
						: groups?.map(group => (
								<li
									key={group._id}
									className={`transition-all ${
										isNav ? '' : 'md:pl-[30px]'
									} duration-300 ${
										isOpen
											? 'opacity-100 max-h-20 mt-2'
											: 'opacity-0 max-h-0 overflow-hidden'
									}`}
								>
									<NavLink
										to={`/group/${group._id}`}
										className={({ isActive }) =>
											`
											flex hover:text-violet-400 duration-300 gap-2 px-3 dark:text-white
											dark:hover:bg-violet-400 py-2 w-full shadow-lg dark:bg-gray-800
											bg-gray-100 rounded-md  justify-center md:justify-start dark:shadow-dark text-center hover:bg-gray-200 transition
											${isNav ? 'md:text-center' : 'md:text-start'}
											${
												isActive
													? 'active hover:text-violet-500 dark:hover:text-white  bg-violet-400'
													: ''
											}
										`
										}
									>
										<h2 className='uppercase text-center  md:hidden'>{group.name[0]}</h2>

										{isNav ? (
											<h2 className='uppercase hidden md:block'>
												{group.name[0]}
											</h2>
										) : (
											<h2 className='hidden md:block'>{group.name}</h2>
										)}
									</NavLink>
								</li>
						  ))}
				</div>
			</ul>
		</nav>
	)
}

export default HeaderNav
