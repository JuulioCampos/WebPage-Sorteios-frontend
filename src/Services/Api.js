import axios from "axios";

export const Api = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:8000",
}, {
  headers: {
	  'Access-Control-Allow-Origin': 'localhost',
	}
});