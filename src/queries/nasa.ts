import { AxiosResponse, AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { getApiClient } from "../modules/axios"
import { FilterConditions, MediaCollection, MediaData } from "../types"

const getImageCollections = (params: FilterConditions, page: number) => {
  return getApiClient().get("/search", {
    params: {
      media_type: "image",
      page,
      ...params,
    },
  })
}

export const useGetImageCollections = (params: FilterConditions, page: number) => {
  return useQuery<AxiosResponse<{ collection: MediaCollection }>, AxiosError>(
    ["getImageCollections", params, page],
    () => getImageCollections(params, page)
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
