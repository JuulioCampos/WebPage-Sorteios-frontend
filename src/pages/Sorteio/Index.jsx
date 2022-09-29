import { useParams } from "react-router-dom"
import { SorteioUnico } from "./Unico/Index"
import { SorteioFinalizado } from "./Finalizados/Index"
export const Sorteio = () => {
    const {sorteio} = useParams()
    
    const Pagina = sorteio === 'finalizados' ? <SorteioFinalizado /> : <SorteioUnico id={sorteio} />

    return (
        <>
            {Pagina}
        </>
    )
}