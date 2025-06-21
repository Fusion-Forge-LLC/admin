import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

type Profile = {
    profile_image: string;
    subscription: string | undefined;
}

export type VendorsWithStats = {
    _id: string;
    fullname: string;
    phone: string;
    role: 'business' | 'admin' | 'client'; 
    status: 'ACTIVE' | 'INACTIVE';
    verified: boolean;
    email: string;
    profileId: string;
    createdAt: string; 
    updatedAt: string;
    isSuspended: boolean;
    __v: number;
    totalProperties: number;
    averageRating: number | null;
    profile: Profile
  };

interface ResponseData {
    results: VendorsWithStats[];
    totalPages: number;
    currentPage: number;
    totalCount: number;
};

async function fetchVendors(page: string, limit: string): Promise<GenericResponse<ResponseData>> {
    const response = await getRequest<GenericResponse<ResponseData>>({
        url: API_ENDPOINTS.USERS.vendors(page, limit),
    });

    return response;
}

export function useFetchVendors(query: { [k: string]: string }) {
    const page = query["page"] || "1";
    const limit = "10";
    return useQuery({
        queryKey: ["vendors-list", query],
        queryFn: () => fetchVendors(page, limit),
    });
}