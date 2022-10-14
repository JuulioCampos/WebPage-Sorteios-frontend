import React, { useState } from "react"

export const TokenContext = React.createContext({}); //cria provider

export const TokenProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("token"))

    return (
        <TokenContext.Provider value={{ token, setToken}}>
            {props.children}
        </TokenContext.Provider>
    )
}