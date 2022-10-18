/* eslint-disable jsx-a11y/heading-has-content */
import { Row } from "react-bootstrap";
import { WHITE } from "../../colors/Colors";
import { Icon } from "../Icons/Index";
import { ColDicas, DivMain, DivTitleDicas } from "./Styles";

export const DicaSorteios = (props) => {
  return (
    <DivMain>
      <Row>
        <ColDicas xs={12} md={6} lg={3}>
          <div>
            <DivTitleDicas>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            <h4>Escolha o sorteio</h4>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            </DivTitleDicas>
            <p>
              Escolha a qual prêmio gostaria de participar. Verifique os dados
              do sorteio e em caso de dúvidas, só chamar nosso suporte!
            </p>
          </div>
        </ColDicas>
        <ColDicas xs={12} md={6} lg={3}>
          <div>
            <DivTitleDicas>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            <h4>Selecione as cotas</h4>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            </DivTitleDicas>
            <p>
              Você poderá escolher quantas cotas desejar! Quanto mais números
              comprar, mais chances de ganhar.
            </p>
          </div>
        </ColDicas>
        <ColDicas xs={12} md={6} lg={3}>
          <div>
            <DivTitleDicas>
              <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
              <h4>Realize o pagamento</h4>
              <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            </DivTitleDicas>
            <p>
              Faça o pagamento via PIX. Os pagamentos não demoram muito e você
              poderá conferir as cotas compradas a qualquer momento.
            </p>
          </div>
        </ColDicas>
        <ColDicas xs={12} md={6} lg={3}>
          <div>
            <DivTitleDicas>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            <h4>Aguarde o sorteio </h4>
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            </DivTitleDicas>
            <p>
              O sorteio será realizado ao fim das vendas de todas cotas. O
              Sorteio acontece pela loteria federal. BOA SORTE!
            </p>
          </div>
        </ColDicas>
      </Row>
    </DivMain>
  );
};
