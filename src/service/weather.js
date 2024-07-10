import { api } from "../Api/Api";
import { env } from "../config/env";


export const getWeatherDataAPI = async (city) => {
    const endpoint = `current.json?key=${env.weatherKey}&q=${city}&aqi=yes`;
    try{
        const response = await api.get(endpoint);
        return response;
    }catch(e){
        return e;
    }
}