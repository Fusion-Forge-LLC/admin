import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

export type Clients = {
    _id: string;
    fullname: string;
    phone: string;
    role: 'client'
    status: 'ACTIVE' | 'INACTIVE' | 'BANNED';
    verified: boolean;
    email: string;
    profileId: string;
    createdAt: string; 
    updatedAt: string; 
    totalBookings: number;
    profileImage: string;
    city: string;
};

interface ResponseData {
    results: Clients[];
    totalPages: number;
    currentPage: number;
    totalCount: number;
};

async function getClients(page: string, limit: string): Promise<GenericResponse<ResponseData>> {
    const response = await getRequest<GenericResponse<ResponseData>>({
        url: API_ENDPOINTS.USERS.clients(page, limit),
    });

    return response;
}

export function useGetClients(query: { [k: string]: string }) {
    const page = query["page"] || "1";
    const limit = "10";
    return useQuery({
        queryKey: ["clients-list", query],
        queryFn: () => getClients(page, limit),
    });
}