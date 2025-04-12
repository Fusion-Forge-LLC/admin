import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

export type PropertyStatTypes = {
    type: string, 
    count: number, 
    percentage: number 
}

async function fetchPropertyStat(): Promise<GenericResponse<PropertyStatTypes[]>> {
    const response = await getRequest<GenericResponse<PropertyStatTypes[]>>({
        url: API_ENDPOINTS.DASHBOARD.propertyStats,
    });

    return response;
}

export function useFetchPropertyStat() {
    return useQuery({
        queryKey: ["property-stats"],
        queryFn: fetchPropertyStat,
    });
}