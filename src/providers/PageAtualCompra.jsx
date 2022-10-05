import React, { useState } from "react"

export const PageAtualCompraContext = React.createContext(0); //cria provider

export const PageAtualCompraProvider= (props) => {
    const [pageAtualCompra, setPageAtualCompra] = useState(0)

    return (
        <PageAtualCompraContext.Provider value={{ pageAtualCompra, setPageAtualCompra}}>
            {props.children}
        </PageAtualCompraContext.Provider>
    )
}