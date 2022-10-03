import { useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { BotaoCompra } from "../../../components/BotaoCompra/Index"
import { Button } from "../../../components/Button/Index"
import { CarouselFade } from "../../../components/Carousel/Index"
import { Icon } from "../../../components/Icons/Index"
import { Api } from "../../../services/Api"
import { Anuncio, DivIntroducao, DivSeparator, Pagamento, PremioCota, ReadBefore, SCol, SDiv, SorteioSection, SSection } from "./Style"
export const SorteioUnico = (props) => {
    const sorteio_data = props.data.find(x => x.id == props.id)
    // const [telefone, setTelefone] = useState(null)
    // const [listaCotas, setListaCotas] = useState(null)
    // const [modalVisible, setModalVisible] = useState(false);
    // const [isOpen, setIsOpen] = useState();

    // const getCotas = () => {
    //     if (telefone.length > 10 && telefone.length < 13 && listaCotas == null) {

    //         const url = "/api/busca-cotas/" + telefone;
    //         Api
    //             .get(url, {
    //                 // put the rest of your config here
    //             })
    //             .then((response) => setListaCotas(response.data))
    //             .catch((err) => {
    //                 console.error("ops! ocorreu um erro" + err);
    //             });
    //     }
    //     setModalVisible(true)
    //     setIsOpen(true)
    // }
    // const btnClose = () => {
    //     setModalVisible(false)
    //     setIsOpen(false)
    //     setListaCotas(null)
    // }
    return (
        <>
            <SorteioSection>
                <SDiv className="d-flex align-center row justify-content-between">
                    <Col sm={12} md={12} lg={6} className="">
                        <h1 className=""><Icon width={"5"} color={"white"} iconName={"fa-solid fa-star"} /> {sorteio_data.titulo}</h1>
                        <small className="text-center text-lg-left">{'Sorteio principal '}</small>
                    </Col>
                    {/* <Col sm={12} md={12} lg={6} className="">
                        <div className="d-lg-grid justify-content-end">
                            <p className="text-white pb-0 mb-0">Consulte as cotas aqui &nbsp;</p>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Seu telefone"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => setTelefone(e.target.value)}
                                    value={telefone}
                                />
                                <div className="search-cotas c-sorteio">
                                    <Button aria-type="search" label="Buscar Números" onClick={getCotas}><i class="fa-solid fa-magnifying-glass"></i></Button>
                                </div>
                            </Form>
                        </div>
                    </Col> */}
                </SDiv>
                <SSection style={{ padding: '8px' }} >
                    <Row>
                        <Col style={{ padding: 0 }} xl={8} lg={8} md={8} sm={12}>
                            <CarouselFade id_sorteio={props.id} data={sorteio_data}></CarouselFade>
                        </Col>
                        <SCol style={{ padding: 0 }} xl={4} lg={4} md={4} sm={12}>
                            <DivIntroducao>
                                <PremioCota>
                                    <p>
                                        <div>
                                            <Icon width={"5"} color={"black"} iconName={"fa-solid fa-star"} />
                                            &nbsp; PREÇO DA COTA: <b>R${sorteio_data.valor_cota.replace('.', ',') ?? '0,60'}</b>&nbsp;
                                            <Icon width={"5"} color={"black"} iconName={"fa-solid fa-star"} />
                                        </div>
                                    </p>
                                </PremioCota>
                                <Anuncio>
                                    <h4> DESCRIÇÃO DO PRÊMIO </h4>
                                    <p>{sorteio_data.descricao}</p>
                                    <ReadBefore >

                                        <h4> ANTES DE COMPRAR </h4>
                                        <ul>
                                            <li> O pagamento deve ser feito imediatamente após a reserva.</li>
                                            <li> Caso não consiga fazer o pagamento através do PIX AUTOMÁTICO na plataforma, envie o pagamento para o PIX abaixo e encaminhe o comprovante para o WhatsApp do número (19) 991978949</li>
                                            <li> As reservas não pagas serão liberadas sem aviso prévio.</li>
                                            <li> Não aceitamos DOC, agendamento de TED ou depósitos em envelopes.</li>
                                            <li> Pagamento somente via PIX ou transferência bancária</li>
                                        </ul>
                                        <h4>COMO PARTICIPAR DO SORTEIO?</h4>
                                        <ul>
                                            <li>Selecione 1 ou mais números no site.</li>
                                            <li>Clique em participar do sorteio</li>
                                            <li>Preencher todos os dados solicitados CORRETAMENTE.</li>
                                            <li>Realize o PIX através do QRCode ou PIX COPIA E COLA.</li>
                                        </ul>
                                        <h4>REGRAS DO SORTEIO:</h4>
                                        <ul>
                                            <li>
                                                O número sorteado será extraído pelo site oficial da Loteria Federal. O ganhador será o que acertar os 5 ÚLTIMOS números da do 1º Prêmio da Loteria Federal do dia marcado para o sorteio.
                                                <br />
                                                <b>Ex:</b> O primeiro prêmio foi 012876, neste caso o ganhador seria o participante com o bilhete 12876.
                                            </li>
                                            <li>A data do sorteio esta sujeita a mudança caso todos os números não tenham sido vendidos até a data PREVISTA. O sorteio só ocorre mediante a todas as cotas pagas.</li>
                                            <li>A data do sorteio e o ganhador serão divulgados em nossos grupos WhatsApp e no perfil do Instagram.</li>
                                            <li>O veiculo será entregue no estado de conservação em que se encontra (vide fotos) com documentação em dia.</li>
                                            <li>O veículo será entregue com DUT reconhecido ao ganhador por autenticidade.</li>
                                            <li>O Veículo se encontra na cidade de Santos - SP e qualquer custo de envio para outra cidade será de nossa responsabilidade.</li>
                                        </ul>
                                    </ReadBefore>
                                </Anuncio>
                            </DivIntroducao>
                        </SCol>
                    </Row>
                </SSection>
            </SorteioSection>

            <SorteioSection>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={10} xl={8}>
                        <BotaoCompra ></BotaoCompra>
                    </Col>
                </Row>
            </SorteioSection>

        </>

    )
}