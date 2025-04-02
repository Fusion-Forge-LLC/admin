import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";


type Response = {
    month: string;
    booking: number;
    payout: number;
}

async function fetchChart(): Promise<GenericResponse<Response[]>> {
    const response = await getRequest<GenericResponse<Response[]>>({
        url: API_ENDPOINTS.DASHBOARD.chart,
    });

    return response;
}

export function useFetchChart() {
    return useQuery({
        queryKey: ["fetch-cart"],
        queryFn: fetchChart,
    });
}