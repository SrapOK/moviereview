import axios from "axios"
import {
  privateInterseptor,
  responseToBoolean
} from "./interseptors"

const $host = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    type: "movie"
  },
  timeout: 1000
})

$host.interceptors.request.use(...privateInterseptor)

$host.interceptors.response.use(...responseToBoolean)

export default $host
