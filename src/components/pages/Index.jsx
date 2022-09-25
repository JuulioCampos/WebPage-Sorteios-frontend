import { WHITE } from '../../colors/Colors';
import { Button } from '../Button/Index';
import { SDiv } from './Style.jsx';
export const Index = () => {
    return (
        <SDiv>
            <h1 style={{color:WHITE}}>
                Faça parte do nossos sorteios hoje mesmo. Com alguns centavos, você concorre a prêmios sonhados!
            </h1>  
            <Button style={{Width:"300px !important"}} label="Buscar Números"></Button>
        </SDiv>
    )
}