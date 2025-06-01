import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { API } from "../hooks/getEnv"

const useSearchUser = (text, url) => {
    const { data = [], isLoading, isFetching, isError } = useQuery(({
        queryKey: ["search_users"],
        queryFn: () => axios.get(`${API}/${url}/search?q=${text}`).then(res => res?.data?.data)
    }))
    return { data, isLoading, isFetching, isError }
}

export default useSearchUser