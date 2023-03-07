import { AxiosResponse, AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { getApiClient } from "../modules/axios"
import { FilterConditions, MediaCollection, MediaData } from "../types"

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

const getMediaData = async (nasaId: string): Promise<MediaData> => {
  const { data: assets } = await getApiClient().get(`/asset/${nasaId}`)
  const { data: metadata } = await getApiClient().get(`/metadata/${nasaId}`)
  const { data: mediaInfo } = await getApiClient().get(metadata.location)
  return {
    assets,
    mediaInfo,
  }
}

export const useGetMediaData = (nasaId: string) => {
  return useQuery<MediaData, AxiosError>(["getMediaData", nasaId], () => getMediaData(nasaId))
}
