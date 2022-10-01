import axios from "axios";

export const BASEURL = "https://kobe-sorteios-b.herokuapp.com/public/";
export const HOST = 'https://kobe-sorteios-b.herokuapp.com/public/';

export const Api = axios.create({
  withCredentials: false,
  baseURL: BASEURL,
}, {
  headers: {
	  'Access-Control-Allow-Origin': HOST
    ,
	}
});