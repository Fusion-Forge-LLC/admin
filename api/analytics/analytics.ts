import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

export type PropertyStatTypes = {
    revenue: number,
    booking: number,
    avgDuration: number
}

async function getAnalytics(): Promise<GenericResponse<PropertyStatTypes>> {
    const response = await getRequest<GenericResponse<PropertyStatTypes>>({
        url: API_ENDPOINTS.ANALYTCIS.booking,
    });

    return response;
}

export function useGetAnalytics() {
    return useQuery({
        queryKey: ["analytics"],
        queryFn: getAnalytics,
    });
}