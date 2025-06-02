import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../hooks/getEnv'
import { useGetGroupeData } from '../store/setGroup'

const getGroups = () => {
	const { setGroup } = useGetGroupeData()
	const getGroup = async () => {
		const response = await axios.get(`${API}/groups`, {
			headers: { 'x-auth-token': localStorage.getItem('token') || '' },
		})
		setGroup(response?.data)
		return response?.data
	}

	const {
		data = [],
		isLoading,
		isFetching,
		isError,
	} = useQuery({
		queryKey: ['groups'],
		queryFn: getGroup,
		refetchOnWindowFocus: true,
	})

	return { data, isLoading, isFetching, isError }
}

export default getGroups
