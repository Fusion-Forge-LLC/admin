"use client";

import { useQuery} from "@tanstack/react-query";
import api from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import { QueryResponse } from "@/@types";


const getUser = async () => {
  const {data} = await api.get<QueryResponse<UserInterface>>(API_ENDPOINTS.AUTH.user);

  return data;
};

export const useGetUser = () => {
    return useQuery({
      queryFn: getUser,
      queryKey: ["get-user"]
    })
};

export interface UserInterface {
    _id: string;
    fullname: string;
    email: string;
    username: string;
    role: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
