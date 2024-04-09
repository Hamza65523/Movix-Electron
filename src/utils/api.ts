import axios, { AxiosResponse } from "axios";
import { ApiResponse, FetchDataFromApi, Headers } from "./api.type";

const BASE_URL: string = "https://api.themoviedb.org/3";
const TMDB_TOKEN: string | undefined = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers: Headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromApi: FetchDataFromApi = async (url, params) => {
  try {
    const { data }: AxiosResponse<ApiResponse> = await axios.get(BASE_URL + url, {
      headers: headers as any, 
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
