import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import axios from "axios";
import {ReportDamageStickerPayload} from "@/api/report/types";
// import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from "@/api/auth/types";

export const report = {
    useMutation: (opt?: UseMutationOptions<unknown, Error, ReportDamageStickerPayload>) => {
        return useMutation({
            mutationKey: ["login"],
            mutationFn: async (payload: ReportDamageStickerPayload) => {
                const formData = new FormData();
                formData.append('comment', payload.location);
                formData.append('image', payload.photo);

                const request = await axios.post('/reports/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                return request.data;
            },
            ...opt,
        });
    },
};
