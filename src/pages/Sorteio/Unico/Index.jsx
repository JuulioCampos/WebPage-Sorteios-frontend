import { Col, Row } from "react-bootstrap"
import { CarouselFade } from "../../../components/Carousel/Index"
import { Icon } from "../../../components/Icons/Index"
import { DivIntroducao, DivSeparator, SCol, SDiv, SorteioSection, SSection } from "./Style"
export const SorteioUnico = (props) => {
    const sorteio_data = props.data.find(x => x.id == props.id)
    return (
        <>
        <SorteioSection>
            <SDiv>
                <h1><Icon width={"5"} color={"white"} iconName={"fa-solid fa-star"}/> {sorteio_data.titulo}</h1>
                <small>{'Sorteio principal '}</small>
            </SDiv>
            <SSection style={{padding:'8px'}} >
                <Row>
                        <Col style={{padding: 0}} xl={8} lg ={8} md={8} sm={12}>
                        <CarouselFade id_sorteio={props.id} data={sorteio_data}></CarouselFade>
                        </Col>
                        <SCol style={{padding: 0}} xl={4} lg ={4} md={4} sm={12}>
                            <DivIntroducao>
                                
                            </DivIntroducao>
                        </SCol>
                </Row>
            </SSection>
        </SorteioSection>
        </>

    )
}