import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";
import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from "@/api/auth/types";

export const login = {
    useMutation: (opt?: UseMutationOptions<LoginResponse, Error, LoginPayload>) => {
        return useMutation({
            mutationKey: ["index"],
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
            mutationKey: ["index"],
            mutationFn: async (payload: LoginPayload) => {
                const request = await axios.post('users/login/', payload);
                return request.data;
            },
            ...opt,
        });
    },
};