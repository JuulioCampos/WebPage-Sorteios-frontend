import axios from "axios";

export const BASEURL = "http://localhost:8000/";
export const HOST = 'localhost';

export const Api = axios.create({
  withCredentials: false,
  baseURL: BASEURL,
}, {
  headers: {
	  'Access-Control-Allow-Origin': HOST
    ,
	}
});