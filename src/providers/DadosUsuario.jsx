import React, { useState } from "react"

export const DadosUsuarioContext = React.createContext({}); //cria provider

export const DadosUsuarioProvider = (props) => {
    const [dadosUsuario, setDadosUsuario] = useState({})

    return (
        <DadosUsuarioContext.Provider value={{ dadosUsuario, setDadosUsuario}}>
            {props.children}
        </DadosUsuarioContext.Provider>
    )
}