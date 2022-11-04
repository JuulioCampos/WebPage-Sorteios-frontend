import { Api } from "../Api";
import { unmaskTelefone } from "../Validations";


export const BuscaCotas = async (telefone) => {
    if (unmaskTelefone(telefone).length > 10 && unmaskTelefone(telefone).length < 13) {
        const url = "/api/busca-cotas/" + unmaskTelefone(telefone);
        let response = await Api.get(url)
        return response
    }

}