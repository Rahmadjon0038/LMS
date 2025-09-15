import { useMutation } from "@tanstack/react-query"
import { instance } from "./api";

// Sun’iy delay helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const login = async (formdata) => {
    const response = await instance.post('/api/auth/login', formdata);
    return response.data;
};

export const useLogin = () => {
    const loginMutation = useMutation({
        mutationKey: ['user'],
        mutationFn: login,
        onSuccess: async (data, vars) => {
            // ⏳ bu yerda kechiktiramiz
            await delay(2000);

            if (vars?.onSuccess) {
                vars.onSuccess(data);
            }
        },
        onError: (error) => {
            console.log(error);
        }
    });
    return loginMutation;
}
