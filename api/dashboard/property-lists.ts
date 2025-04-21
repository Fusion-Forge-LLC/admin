import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

interface PropertyAddress {
    address?: string;
    location?: string;
    neighborhood?: string;
    state?: string;
    coordinates?: number[];
}
  
interface User {
    _id: string;
    fullname: string;
    phone: string;
    role: string;
    status: string;
    verified: boolean;
    email: string;
    profileId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
  
export interface Property {
    property_address: PropertyAddress;
    _id: string;
    property_title: string;
    property_description: string;
    price: number;
    price_postfix?: string;
    type: string;
    bedroom: number;
    gallery: string[];
    video: string[];
    features: string[];
    reviews: string[];
    user?: User | null;
    status: string;
    views: number;
    booking: string[];
    wishlists: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    old_price?: number;
    price_prefix?: string;
    rating: number
}

interface ResponseData {
    properties: Property[];
    totalPages: number;
    currentPage: number;
    totalCount: number;
};

async function fetchProperties(page: number, limit: number): Promise<GenericResponse<ResponseData>> {
    const response = await getRequest<GenericResponse<ResponseData>>({
        url: API_ENDPOINTS.DASHBOARD.propertyLists(page, limit),
    });

    return response;
}

export function useFetchProperties(query: { [k: string]: string }) {
    const page = parseInt(query["page"] || "1");
    const limit = 5;
    return useQuery({
        queryKey: ["properties-list", query],
        queryFn: () => fetchProperties(page, limit),
    });
}