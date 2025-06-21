"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import { QueryResponse } from "@/@types";
import { queryClient } from "@/layout/react-query-provider";

type Payload = {
    userId: string,
    data: {isSuspended: boolean}
}

const modifyVendor = async (payload: Payload) => {
  const {data} = await api.patch<QueryResponse<null>>(API_ENDPOINTS.USERS.vendor(payload.userId), payload.data);

  return data;
};

export const useModifyVendor = (): UseMutationResult<QueryResponse<null>, AxiosError<ErrorData>, Payload> => {
  return useMutation({
    mutationFn: modifyVendor,
    onSuccess: (data) => {
        showSuccess(data.message);
        queryClient.invalidateQueries({ queryKey: ['vendors-list'] });
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
