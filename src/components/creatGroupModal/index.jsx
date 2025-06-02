import { X } from 'lucide-react'

import { useState } from 'react'

import axios from 'axios'
import { API } from '../../hooks/getEnv'
import { toast } from 'react-hot-toast'

const CreateGroupModal = ({ onClose, isNav }) => {
	const [groupName, setGroupName] = useState()
	const [password, setPassword] = useState()

	
	const addGroupFech = async () => {
  try {
    const response = await axios.post(
      `${API}/groups`,
      {
        name: groupName,
        password,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token') || '',
        }
      }
    );

    toast.success(response?.data?.message );
		onClose()
  } catch (error) {
    const message = error?.response?.data?.message ;
    toast.error(message);
  }
}


	const onSubmit = e => {
		e.preventDefault()
		addGroupFech()
	}

	return (
		<div className='fixed inset-0 z-50 flex items-start px-[10px]' onClick={onClose}>
			<form
				onSubmit={onSubmit}
				className={`bg-white rounded-xl shadow-2xl w-80 p-4 mt-24 
            ${isNav ? 'ml-20' : 'ml-64'} 
            max-md:ml-[65px] 
            relative transition-all duration-300`}
						onClick={(e) => e.stopPropagation()} 
			>
				<div className='flex items-center justify-between border-b pb-2'>
					<h2 className='text-md font-semibold'>Group name and password</h2>
					<button
						type='button'
						onClick={onClose}
						className='text-gray-500 hover:text-red-500 transition'
					>
						<X size={20} />
					</button>
				</div>

				<div className='mt-4 space-y-3'>
					<input
						type='text'
						placeholder='Group name'
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm'
						onChange={e => {
							setGroupName(e.target.value)
						}}
					/>
					<input
						type='password'
						placeholder='Group password'
						className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm'
						onChange={e => {
							setPassword(e.target.value)
						}}
					/>
				</div>

				<div className='mt-5 flex justify-between'>
					<button
						type='submit'
						className='bg-violet-400 duration-300 text-white px-4 py-1.5 rounded-md hover:bg-violet-700 transition text-sm'
					>
						Create
					</button>
					<button
						type='button'
						onClick={onClose}
						className='border border-violet-400 text-violet-500 px-4 py-1.5 rounded-md hover:bg-blue-100 transition text-sm'
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreateGroupModal
