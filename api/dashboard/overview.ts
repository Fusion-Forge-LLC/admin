import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

type SubscriptionCounts = {
    basic: number,
    medium: number,
    premium: number,
  };

type Response = {
    vendors: SubscriptionCounts,
    totalProperties: number,
    propertiesRented: number,
    activeProperties: number,
    users: number,
}

async function fetchOverview(): Promise<GenericResponse<Response>> {
    const response = await getRequest<GenericResponse<Response>>({
        url: API_ENDPOINTS.DASHBOARD.overview,
    });

    return response;
}

export function useFetchOverview() {
    return useQuery({
        queryKey: ["fetch-overview"],
        queryFn: fetchOverview,
    });
}