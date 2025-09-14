import { useMutation } from "@tanstack/react-query"
import { instance } from "./api";

const login = async (formdata) => {
    const response = await instance.post('/api/auth/login', formdata);
    return response.data
};

export const useLogin = () => {
    const loginMutation = useMutation({
        mutationKey: ['user'],
        mutationFn: login,
        onSuccess: (data, vars) => {
            if (vars.onSuccess) {
                vars.onSuccess(data)
            }
        },
        onError: (error) => {
            console.log(error)
        }
    });
    return loginMutation
}