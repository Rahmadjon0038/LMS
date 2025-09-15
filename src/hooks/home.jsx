import { useQuery } from "@tanstack/react-query"
import { instance } from "./api";

const getHomeData = async () => {
    const response = await instance.get('/');
    return response.data
};

export const useGetHomedata = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['home'],
        queryFn: getHomeData
    });
    return { data, isLoading, error }
}