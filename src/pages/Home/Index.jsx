import { Link } from "react-router-dom"
import { WHITE } from "../../colors/Colors"
import { Button } from "../../components/Button/Index"
import { SDiv } from "../../components/Style"

export const Index = () => {
    return (
        <SDiv>
            <h1 style={{color:WHITE}}>
                Faça parte do nossos sorteios hoje mesmo. Com alguns centavos, você concorre a prêmios sonhados!
            </h1>
            <Link to="/sorteios"><Button style={{Width:"300px !important"}} label="Ver sorteios">Ver sorteios</Button></Link>
        </SDiv>
    )
}