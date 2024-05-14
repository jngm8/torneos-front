import axios from "axios";
const BASEURL = "http://localhost:3001";

export const axiosPrivate  = axios.create({
    baseURL: BASEURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})