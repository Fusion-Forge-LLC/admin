import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";
import { Property } from "./property-lists";

interface ResponseData {
    properties: Property[];
    totalPages: number;
    currentPage: number;
    totalCount: number;
};

async function fetchProperties(query: { [k: string]: string }): Promise<GenericResponse<ResponseData>> {
    const searchParams = new URLSearchParams(query);
    const queryString = searchParams.toString();
    const response = await getRequest<GenericResponse<ResponseData>>({
        url: API_ENDPOINTS.PROPERTIES.allProperties(queryString),
    });

    return response;
}

export function useFetchAllProperties(query: { [k: string]: string }) {
    return useQuery({
        queryKey: ["all-properties", query],
        queryFn: () => fetchProperties(query),
    });
}