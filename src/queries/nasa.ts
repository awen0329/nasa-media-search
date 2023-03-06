import { AxiosResponse, AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { getApiClient } from "../modules/axios"
import { FilterConditions, MediaCollection } from "../types"

const getImageCollections = (params: FilterConditions) => {
  return getApiClient().get("/search", {
    params: {
      media_type: "image",
      ...params,
    },
  })
}

export const useGetImageCollections = (params: FilterConditions) => {
  return useQuery<AxiosResponse<{ collection: MediaCollection }>, AxiosError>(
    ["getImageCollections", params],
    () => getImageCollections(params)
  )
}
