import React, { useEffect, useState } from "react"
import { Api } from "../services/Api";

export const ListaCotasContext = React.createContext({}); //cria provider

export const ListaCotasProvider = (props) => {
    const [listaSorteios, setListaSorteios] = useState()
    const [waitLoad, setWaitLoad] = useState(true)

    useEffect(() => {
        if (!listaSorteios) {
            const url = "/api/busca-sorteios";
            Api
                .get(url, {
                })
                .then((response) => setListaSorteios(response.data), setWaitLoad(!true))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }, [listaSorteios])

    return (
        <ListaCotasContext.Provider value={{ listaSorteios, setListaSorteios, waitLoad, setWaitLoad }}>
            {props.children}
        </ListaCotasContext.Provider>
    )
}