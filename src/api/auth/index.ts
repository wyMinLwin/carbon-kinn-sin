import {useMutation, UseMutationOptions, useQuery, UseQueryOptions} from "@tanstack/react-query";
import axios from "axios";
import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse, VerifyUserType} from "@/api/auth/types";
import Cookies from "js-cookie";

export const login = {
    useMutation: (opt?: UseMutationOptions<LoginResponse, Error, LoginPayload>) => {
        return useMutation({
            mutationKey: ["login"],
            mutationFn: async (payload: LoginPayload) => {
                const request = await axios.post('users/login/', payload);
                return request.data;
            },

            ...opt,
        });
    },
};

export const register = {
    useMutation: (opt?: UseMutationOptions<RegisterResponse, Error, RegisterPayload>) => {
        return useMutation({
            mutationKey: ["register"],
            mutationFn: async (payload: LoginPayload) => {
                const request = await axios.post('users/register/', payload);
                return request.data;
            },
            ...opt,
        });
    },
};

export const verify = {
    useQuery: (opt?: Partial<UseQueryOptions<VerifyUserType, Error>>) => {
        return useQuery({
            queryKey: ["verify"],
            queryFn: async () => {
                const token = Cookies.get('cks-app-token');

                const request = await axios.post('users/token/verify_user/', {token});
                return request.data;
            },
            refetchOnWindowFocus: false,
            ...opt,

        })
    }
}