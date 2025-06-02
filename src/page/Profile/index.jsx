import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { API } from '../../hooks/getEnv'
import { useQuery } from '@tanstack/react-query'
import { Files, Trash2 } from 'lucide-react';
const Prifile = () => {

	const getUserData = async () => {
		const response = await axios.get(`${API}/auth`,{ headers:{"x-auth-token": localStorage.getItem('token') || ''}})
	}
	const { data , isLoading, isFetching, isError } = useQuery({
      queryKey: ["userData"],
      queryFn: getUserData ,
      refetchOnWindowFocus: true, 
  })

	return (
		<div className='p-[15px] w-full h-full'>
			<div className='bg-[#F9FAFB] border dark:border-gray-800 dark:bg-gray-800 dark:shadow-dark px-[20px] w-full shadow-lg min-h-[300px] rounded-[6px]'>
				<div className='flex w-full gap-y-[10px] flex-col md:flex-row justify-center md:justify-between '>
					<h1 className='font-bold w-full md:w-fit text-center text-[25px]  md:text-start md:text-[35px] dark:text-white'>Your Profile</h1>
					<div className='flex w-full flex-col md:flex-row md:w-fit gap-[10px]'>
						<CopyToClipboard text={"salom"}>
							<div className='cursor-pointer md:w-fit w-full items-center bg-violet-500 hover:bg-violet-700 duration-300 rounded-[6px] px-[15px] py-[10px] text-white font-bold  flex gap-[10px]'>
								 <Files /> <h2>Copy Username</h2>
							</div>
						</CopyToClipboard>
						<button className='cursor-pointer w-full md:w-fit items-center bg-red-500 rounded-[6px] px-[15px] py-[10px] text-white font-bold  hover:bg-red-700 duration-300 flex gap-[10px]'>
								<Trash2 />Delete Accout
						</button>
					</div>
				</div>

				<div className="flex gap-[10px]">
						<div className="">
								
						</div>
				</div>
			</div>
		</div>
	)
}

export default Prifile
