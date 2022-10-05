import React, { useState } from "react"

export const countCotasContext = React.createContext({}); //cria provider

export const CountCotasProvider = (props) => {
    const [contaCotas, setContaCotas] = useState(0)

    return (
        <countCotasContext.Provider value={{ contaCotas, setContaCotas}}>
            {props.children}
        </countCotasContext.Provider>
    )
}