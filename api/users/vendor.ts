import { API_ENDPOINTS } from "@/lib/api-endpoints";
import { GenericResponse } from "@/lib/generic-types";
import { getRequest } from "@/lib/http-helpers";
import { useQuery } from "@tanstack/react-query";

type UserWithDetails = {
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
    businessProfile: BusinessProfile;
    recentProperties: Property[];
    recentPayouts: Payout[];
};
  
type BusinessProfile = {
    profile_image: string;
    subscription: {
        plan: string,
        subscription_date: Date,
        expiry_date: Date,
    } | null | undefined
};
  
export type Property = {
    _id: string;
    property_title: string;
    property_description: string;
    property_address: PropertyAddress;
    price: number;
    caution_fee?: number;
    price_postfix: string;
    type: string;
    bedroom?: number;
    gallery: string[];
    video: string[];
    features: string[];
    reviews: any[];
    user: string;
    status: "ACTIVE";
    views: number;
    booking: string[];
    wishlists: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    disabledDates?: string[];
};
  
type PropertyAddress = {
    address: string;
    location?: string;
    state: string;
    coordinates: number[];
};
  
export type Payout = {
    _id: string;
    amount: number;
    profile: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};
  

async function fetchVendorDetails(id: string): Promise<GenericResponse<UserWithDetails>> {
    const response = await getRequest<GenericResponse<UserWithDetails>>({
        url: API_ENDPOINTS.USERS.vendor(id),
    });

    return response;
}

export function useFetchVendorDetails(id: string) {
    return useQuery({
        queryKey: ["vendor-detail", id],
        queryFn: () => fetchVendorDetails(id),
    });
}