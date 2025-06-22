"use client";

import {UseMutationResult, useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {displayErrorMessage, showSuccess} from "@/lib/utils";
import api, {ErrorData} from "@/lib/http";
import {API_ENDPOINTS} from "@/lib/api-endpoints";
import { QueryResponse } from "@/@types";
import { queryClient } from "@/layout/react-query-provider";

type Payload = {
    propertyId: string,
    data: {isSuspended: boolean}
}

const suspendProperty = async (payload: Payload) => {
  const {data} = await api.patch<QueryResponse<null>>(API_ENDPOINTS.PROPERTIES.property(payload.propertyId), payload.data);

  return data;
};

export const useSuspendProperty = (): UseMutationResult<QueryResponse<null>, AxiosError<ErrorData>, Payload> => {
  return useMutation({
    mutationFn: suspendProperty,
    onSuccess: (data) => {
        showSuccess(data.message);
        queryClient.invalidateQueries({ queryKey: ['properties-list'] });
    },
    onError: (error) => {
      displayErrorMessage(error);
    },
  });
};
