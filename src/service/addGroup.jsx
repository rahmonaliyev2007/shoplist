import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { API } from '../hooks/getEnv'

const addGroups = ({ name, password }) => {
	const {
		data = [],
		isLoading,
		isFetching,
		isError,
	} = useQuery({
		queryKey: ['groups'],
		queryFn: () =>
			axios
				.get(
					`${API}/groups`,
					{
						name,
						password,
					},
					{ headers: { 'x-auth-token': localStorage.getItem('token') || '' } }
				)
				.then(res => res?.data ?? []),
	})

	return { data, isLoading, isFetching, isError }
}

export default addGroups
