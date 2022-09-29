import axios from "axios";

export const BASEURL = "https://8102-2804-431-c7cb-f036-f194-de44-e247-be51.ngrok.io/";
export const HOST = 'https://8102-2804-431-c7cb-f036-f194-de44-e247-be51.ngrok.io/';

export const Api = axios.create({
  withCredentials: false,
  baseURL: BASEURL,
}, {
  headers: {
	  'Access-Control-Allow-Origin': HOST
    ,
	}
});