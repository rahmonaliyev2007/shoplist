// DeleteGroupModal.jsx
import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { API } from '../../hooks/getEnv'
import { toast } from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { createPopper } from '@popperjs/core'
import { useAuthStore } from '../../store/useToken'

const DeleteGroupModal = ({ onClose, referenceElement }) => {
	const [isLoading, setIsLoading] = useState(false)
	const queryClient = useQueryClient()
	const modalRef = useRef(null)
	const {clearToken}=useAuthStore()

	useEffect(() => {
		if (referenceElement && modalRef.current) {
			createPopper(referenceElement, modalRef.current, {
				placement: 'bottom-start',
				modifiers: [
					{
						name: 'preventOverflow',
						options: { boundary: 'viewport' },
					},
				],
			})
		}
	}, [referenceElement])

	const deleteUser = async () => {
		try {
			setIsLoading(true)
			const response = await axios.delete(`${API}/users`, {
				headers: {
					'x-auth-token': localStorage.getItem('token') || '',
				},
			})
			toast.success(response?.data?.message || 'Deleted account')
			clearToken()
			onClose()
		} catch (error) {
			const message = error?.response?.data?.message || 'Failed to delete account'
			toast.error(message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<div className="fixed inset-0 z-40" onClick={onClose} />
			<div
				ref={modalRef}
				className="z-50 bg-white dark:bg-gray-800 shadow-xl rounded-lg w-80 p-4 absolute"
			>
				<div className="flex justify-between border-b pb-2 dark:border-gray-600">
					<h2 className="text-md font-semibold dark:text-gray-200">Delete account</h2>
					<button onClick={onClose} className="text-gray-500 hover:text-red-500">
						<X size={20} />
					</button>
				</div>
				<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
					Are you sure you want to delete your account? This action cannot be undone.
				</p>
				<div className="mt-5 flex justify-between">
					<button
						onClick={deleteUser}
						disabled={isLoading}
						className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-700 transition text-sm disabled:opacity-50"
					>
						{isLoading ? 'Deleting...' : 'Delete'}
					</button>
					<button
						onClick={onClose}
						className="border border-gray-400 text-gray-600 px-4 py-1.5 rounded-md hover:bg-gray-200 transition text-sm dark:border-gray-500 dark:text-gray-200"
					>
						Cancel
					</button>
				</div>
			</div>
		</>
	)
}

export default DeleteGroupModal