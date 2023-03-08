import Axios from "axios"

export const getApiClient = () => {
  const baseURL = `${process.env.REACT_APP_NASA_API}`
  return Axios.create({
    baseURL,
  })
}
