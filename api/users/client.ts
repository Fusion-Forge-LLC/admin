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
    hasActiveBooking: boolean;
    activeBooking: IBooking;
    recentBookings: IBooking[];
    propertyDetails: {
        property_title: string;
        type: string;
    };
    reviews: IReview[];
};

export interface IBooking {
    _id: string;
    property_id: string;
    checkin: Date | string;
    checkout: Date | string;
    duration: number;
    transaction_id: string;
    payment_method: string;
    client_id: string;
    property_owner: string;
    no_of_guest: number;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    amount_paid: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    __v: number;
    propertyDetails: {
        property_title: string;
    }
}

interface IReview {
    _id: string;
    review_text: string;
    rating: number; 
    propertyInfo: {
        property_title: string;
    }
}

async function fetchClientDetails(id: string): Promise<GenericResponse<UserWithDetails>> {
    const response = await getRequest<GenericResponse<UserWithDetails>>({
        url: API_ENDPOINTS.USERS.client(id),
    });
    return response;
}

export function useFetchClientDetails(id: string) {
    return useQuery({
        queryKey: ["client-detail", id],
        queryFn: () => fetchClientDetails(id),
    });
}