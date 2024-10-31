import { TestType } from "@/shared/types";
import { UseQueryOptions } from "@tanstack/react-query";
export declare const getTestData: {
    useQuery: (opt?: UseQueryOptions<unknown, Error, Array<TestType>>) => import("@tanstack/react-query").UseQueryResult<TestType[], Error>;
};
