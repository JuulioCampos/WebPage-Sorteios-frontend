import { Api } from "../Api";

export const ValidaToken = async (token) => {
    const url = "/api/valida-token";
    let response = await Api.post(url, {}, {
        headers: {
            Authorization: `Bearer ${token.replace('"', '')}`,
        }
    })
    return response
} 