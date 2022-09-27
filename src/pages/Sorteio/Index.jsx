import { useParams } from "react-router-dom"
import { Index as Unico } from "./Unico/Index"
import { Index as Finalizados } from "./Finalizados/Index"
export const Index = () => {
    const {sorteio} = useParams()
    
    const Pagina = sorteio === 'finalizados' ? <Finalizados /> : <Unico id={sorteio} />

    return (
        <>
            {Pagina}
        </>
    )
}