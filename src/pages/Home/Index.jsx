/* eslint-disable jsx-a11y/heading-has-content */
import { Col, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import { WHITE } from "../../colors/Colors";
import { Button } from "../../components/Button/Index";
import { CarouselFade } from "../../components/Carousel/Index";
import { DicaSorteios } from "../../components/DicaSorteio/Index";
import { Icon } from "../../components/Icons/Index";
import { SDiv } from "../../components/Style";
import { PremioCota } from "../Sorteio/Unico/Style";
import { CarouselDiv, DadosSorteio, SorteioMain } from "./Styles";

export const Home = (props) => {
    const data = props.data;
    const SorteioPrincipal = data.find((sorteio) => sorteio.principal === true);

    return (
      <SDiv>
        <h1 style={{ color: WHITE }}>
          Faça parte do nossos sorteios hoje mesmo. Com alguns centavos, você
          concorre a prêmios sonhados!
        </h1>
        <Link to="/sorteios">
          <Button className={"p-3"} style={{ Width: "300px !important" }} label="Ver sorteios">
            Ver todos sorteios
          </Button>
        </Link>
        <SorteioMain>
          <div className="d-flex title">
            <Icon width={"5"} color={WHITE} iconName={"fa-solid fa-star"} />
            <h2 style={{ color: WHITE }}>
              Confira aqui nosso sorteio principal
            </h2>
          </div>
          <Row>
            <Col xs={12} md={7} lg={8}>
              <CarouselDiv>
                <CarouselFade data={SorteioPrincipal}></CarouselFade>
              </CarouselDiv>
            </Col>
            <Col xs={12} md={5} lg={4}>
              <DadosSorteio>
                <h4 className="mt-3">
                  <b>Prêmio:</b> {SorteioPrincipal.titulo}
                </h4>
                <h4 className="mt-3">
                  <b>Descrição:</b> {SorteioPrincipal.descricao}
                </h4>
                <h4 className="mt-3">
                  <b>Valor no Pix:</b> {SorteioPrincipal.valor_aproximado}
                </h4>
                <PremioCota>
                  <p>
                    <div>
                      <Icon
                        width={"5"}
                        color={"black"}
                        iconName={"fa-solid fa-star"}
                      />
                      &nbsp; PREÇO DA COTA:{" "}
                      <b>
                        R${SorteioPrincipal.valor_cota.replace(".", ",") ?? "0,60"}
                      </b>
                      &nbsp;
                      <Icon
                        width={"5"}
                        color={"black"}
                        iconName={"fa-solid fa-star"}
                      />
                    </div>
                  </p>
                </PremioCota>
                <Link className='nav-link mt-3 d-flex justify-content-center' to={"/sorteio/" + SorteioPrincipal.id}>
                    <Button className={'p-3'}>Compre aqui</Button>
                </Link>
              </DadosSorteio>
            </Col>
          </Row>
        </SorteioMain>
        <DicaSorteios></DicaSorteios>
      </SDiv>
    );
};
