import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { API } from '../../hooks/getEnv'
import { useQuery } from '@tanstack/react-query'
import { Files, Trash2 } from 'lucide-react'
import { useAuthMe } from '../../store/useAuthMe'
import toast from 'react-hot-toast'
import { useRef, useState } from 'react'
import DeleteGroupModal from '../../components/deleteUserModal'

const Prifile = () => {
	const { setAuthMe } = useAuthMe()
	const getUserData = async () => {
		const response = await axios.get(`${API}/auth`, {
			headers: { 'x-auth-token': localStorage.getItem('token') || '' },
		})
		if (response.status >= 200 && response.status < 400) {
			setAuthMe(response.data)
		}
		return response.data
	}
	const { data } = useQuery({
		queryKey: ['userData'],
		queryFn: getUserData,
		refetchOnWindowFocus: true,
	})
	const [isOpen, setOpen] = useState(false)

	const deleteBtnRef = useRef(null)

	const handleClose = () => {
		setOpen(false)
	}

	const openModal = () => {
	setOpen(true)
}


	return (
		<div className='p-[15px] w-full h-full'>
			{isOpen && (
				<DeleteGroupModal
					onClose={handleClose}
					referenceElement={deleteBtnRef.current}
				/>
			)}

			<div className='bg-[#F9FAFB] py-[50px] border dark:border-gray-800 dark:bg-gray-800 dark:shadow-dark px-[20px] w-full shadow-lg min-h-[300px] rounded-[6px]'>
				<div className='flex w-full gap-y-[10px] flex-col md:flex-row justify-center md:justify-between '>
					<h1 className='font-bold w-full md:w-fit text-center text-[25px]  md:text-start md:text-[35px] dark:text-white'>
						Your Profile
					</h1>
					<div className='flex w-full flex-col md:flex-row md:w-fit gap-[10px]'>
						<CopyToClipboard text={'salom'}>
							<div
								onClick={() => {
									toast.success('Copied')
								}}
								className='cursor-pointer md:w-fit w-full items-center bg-violet-500 hover:bg-violet-700 duration-300 rounded-[6px] px-[15px] py-[10px] text-white font-bold  flex gap-[10px]'
							>
								<Files /> <h2>Copy Username</h2>
							</div>
						</CopyToClipboard>
						<button
							ref={deleteBtnRef}
							onClick={openModal}
							className='cursor-pointer w-full md:w-fit items-center bg-red-500 rounded-[6px] px-[15px] py-[10px] text-white font-bold  hover:bg-red-700 duration-300 flex gap-[10px] active:bg-red-400'
						>
							<Trash2 />
							Delete Accout
						</button>
					</div>
				</div>

				<div className='flex gap-[10px] mt-[20px] flex-col md:flex-row items-center'>
					<div className='uppercase text-[45px] rounded-full text-white font-bold bg-red-500 w-[150px] h-[150px] flex justify-center items-center'>
						<h2 className='uppercase'>{data?.name[0]}</h2>
					</div>
					<div className=''>
						<div className='flex  relative'>
							<h2 className='font-bold text-[25px] first-letter:capitalize'>
								{data?.name}
							</h2>
							<sub className=' px-[10px] h-[35px] absolute top-[-15px] right-[-65px] rounded-[10px] font-bold text-white text-[16px]  flex items-center bg-green-500'>
								{data?.status}
							</sub>
						</div>
						<h2 className='text-[16px] text-gray-500'>{data?.username}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Prifile
