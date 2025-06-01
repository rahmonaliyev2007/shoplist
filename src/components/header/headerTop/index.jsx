import { Menu } from 'lucide-react'
import { useNavStore } from '../../../store/useNavigate'

const HeaderTop = () => {
	const { toggleIsNav } = useNavStore()

	return (
		<header className='h-[60px] flex  items-center w-full bg-red-500'>
			<div className='left flex items-center h-full'>
				<div className='logo h-[50px] w-[50px]'>
					<img src="/logo.png" alt="logo" className='w-full h-full' />
				</div>
				<button onClick={toggleIsNav}>
					<Menu />
				</button>
			</div>

			<div className='search w-full '>
				<input
					type='text'
					placeholder='search'
					className='px-[10px] py-[8px] w-full  outline-none border-[1px] bg-green-500 border-gray-500 rounded-[6px]'
				/>
			</div>
		</header>
	)
}

export default HeaderTop
