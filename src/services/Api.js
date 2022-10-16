import axios from "axios";

export const BASEURL = "http://159.203.165.148/";
export const HOST = 'http://159.203.165.148/';
// export const BASEURL = "http://localhost:8000/";
// export const HOST = 'http://localhost:8000/';
export const Api = axios.create({
  withCredentials: false,
  baseURL: BASEURL,
}, {
  headers: {
	  'Access-Control-Allow-Origin': HOST
    ,
	}
});
