import axios, { AxiosResponse } from 'axios'

export const checkCookies = async() => {
    try {
        const response : AxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URI}/checkCookies`, {withCredentials : true});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}