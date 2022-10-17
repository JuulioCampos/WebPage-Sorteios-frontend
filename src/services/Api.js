import axios from "axios";

export const BASEURL = "https://https://kobe-sorteios-b.herokuapp.com/";
export const HOST = 'https://https://kobe-sorteios-b.herokuapp.com/';
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
