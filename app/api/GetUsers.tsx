import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import ApiManager from "./ApiManagers";

export const GetUsers = (async () => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        headers: {
            'content=type': 'application/json',
        } as RawAxiosRequestHeaders,    
    };
    try {
        const response: AxiosResponse = await ApiManager.get(`/users?page=1`, config);
        return response;
    } catch (err) {
        console.log(err);
    }
})();