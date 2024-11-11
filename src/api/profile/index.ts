import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import axios from "axios";
import {CollectedStickersType} from "@/api/profile/types";

// export const get = {
//     useQuery: (opt?: Partial<UseQueryOptions<unknown, Error, ProfileType>>) => {
//         return useQuery({
//             queryKey: ["profile"],
//             queryFn: async () => {
//                 const request = await axios.get('users/profiles/',);
//                 return request.data;
//             },
//             ...opt
//         })
//     }
// }

export const get_collected_stickers = {
    useQuery: (opt?: Partial<UseQueryOptions<unknown, Error, CollectedStickersType[]>>) => {
        return useQuery({
            queryKey: ["collected-stickers"],
            queryFn: async () => {
                const request = await axios.get('collect-sticker/',);
                return request.data;
            },
            ...opt
        })
    }
}