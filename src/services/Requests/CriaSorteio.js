import { Api } from "../Api";
import { unmaskTelefone } from "../Validations";

export const createSorteio = async (data) => {
        const token = localStorage.getItem("token")
        if (data) {
            const url = "/api/create-sorteio" ;
            let response = await Api.post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": '*',
                    Authorization: `Bearer ${token.replace('"', '')}`,
                }
            })
            return response
        }
}