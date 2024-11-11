import {useMutation, UseMutationOptions} from "@tanstack/react-query";

import axios, {AxiosError} from "axios";

export const collect_sticker = {
    useMutation: (opt?: UseMutationOptions<unknown, AxiosError, string>) => {
        return useMutation({
            mutationKey: ["collect-sticker"],
            mutationFn: async (payload: string) => {
                const request = await axios.post('collect-sticker/', {
                    sticker_code: payload
                });
                return request.data;
            },

            ...opt,
        });
    },
};
