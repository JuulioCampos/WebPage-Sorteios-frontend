import { useParams } from "react-router-dom"
import { SorteioUnico } from "./Unico/Index"
import { SorteioFinalizado } from "./Finalizados/Index"
export const Sorteio = (props) => {
    const {sorteio} = useParams()
    const data = props.data
    const Pagina = sorteio === 'finalizados' ? <SorteioFinalizado /> : <SorteioUnico id={sorteio} data={data}/>

    return (
        <>
            {Pagina}
        </>
    )
}