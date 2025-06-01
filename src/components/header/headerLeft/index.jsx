import { useNavStore } from '../../../store/useNavigate'


const HeaderNav = () => {
	const {isNav}=useNavStore()

	
	return (
		<nav className='md:max-w-[250px] bg-yellow-400  h-[calc(100vh-60px)] md:min-w-[250px]'>

		</nav>
	)
}

export default HeaderNav