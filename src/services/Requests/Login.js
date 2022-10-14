import { Api } from "../Api";
import { unmaskTelefone } from "../Validations";

export const postLogin = async (email, senha, checked=false) => {
    if (email && senha) {
        let data = {
            'email': email,
            'password': senha
        }
        const url = "/api/login";
        let response = await Api.post(url, data
        )
        return response
    }
    if (checked) {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('senha', JSON.stringify(senha));
    }
}