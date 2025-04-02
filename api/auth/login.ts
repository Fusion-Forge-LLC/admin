"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import { QueryResponse } from "@/@types";


const logIn = async (payload: LogInPayload) => {
  const {data} = await api.post<QueryResponse<LoginResponse>>(API_ENDPOINTS.AUTH.login, payload);

  return data;
};

export const useLogIn = (): UseMutationResult<QueryResponse<LoginResponse>, AxiosError<ErrorData>, LogInPayload> => {
  const router = useRouter();

  return useMutation({
    mutationFn: logIn,
    onSuccess: (data) => {
        showSuccess(data.message);
        const expirationDate = new Date();

        expirationDate.setHours(expirationDate.getHours() + 2);
        Cookies.set("spacefinda-admin-token", data.data.token, {
            secure: true,
            sameSite: "Strict",
            expires: expirationDate,
        });
        router.push("/dashboard/overview");
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};

type LogInPayload = {
    username: string;
    password: string;
};

export interface LoginResponse {
  user: {
    _id: string;
    fullname: string;
    email: string;
    username: string;
    role: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };
  token: string;
  message: string;
  success: boolean;
}
