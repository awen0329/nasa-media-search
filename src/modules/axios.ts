import axios from "axios"

export const getApiClient = () => {
  const baseURL = `${process.env.REACT_APP_NASA_API}`
  return axios.create({
    baseURL,
  })
}
