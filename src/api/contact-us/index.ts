import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";
import {ContactUsPayload} from "./types";
// import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from "@/api/auth/types";

export const send = {
    useMutation: (opt?: UseMutationOptions<unknown, Error, ContactUsPayload>) => {
        return useMutation({
            mutationKey: ["contact-us"],
            mutationFn: async (payload: ContactUsPayload) => {

                const request = await axios.post('/contact-us/', payload);
                return request.data;
            },
            ...opt,
        });
    },
};
