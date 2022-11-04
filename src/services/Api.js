import axios from "axios";

// export const BASEURL = "https://furiasorteios.fun/";
// export const HOST = 'https://furiasorteios.fun/';
export const BASEURL = "http://localhost:8000/";
export const HOST = 'http://localhost:8000/';
export const Api = axios.create({
  withCredentials: false,
  baseURL: BASEURL,
}, {
  headers: {
	  'Access-Control-Allow-Origin': HOST
    ,
	}
});
