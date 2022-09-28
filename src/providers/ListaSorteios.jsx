import React, { useEffect, useState } from "react"
import { Api } from "../services/Api";

export const ListaCotasContext = React.createContext({}); //cria provider

export const ListaCotasProvider = (props) => {
    const [listaSorteios, setListaSorteios] = useState()

    useEffect(() => {
        if (!listaSorteios) {
            const url = "/api/busca-sorteios";
            Api
                .get(url, {
                })
                .then((response) => setListaSorteios(response.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }, [listaSorteios])

    return (
        <ListaCotasContext.Provider value={{ listaSorteios, setListaSorteios }}>
            {props.children}
        </ListaCotasContext.Provider>
    )
}