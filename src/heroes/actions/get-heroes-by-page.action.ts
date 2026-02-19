import { heroAPI } from "../api/hero.api";

export const getHeroesByPage = async() => {
    const {data} = await heroAPI.get('/');
    return data;
}