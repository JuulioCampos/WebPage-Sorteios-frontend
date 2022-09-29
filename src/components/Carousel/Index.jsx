import Carousel from 'react-bootstrap/Carousel';
import { BASEURL } from '../../services/Api';

export const CarouselFade = (props) => {
    const data = props.data
    return (
        <Carousel fade>
            {
                data.fotos.map((x, y) => (
                    <Carousel.Item key={y}>
                        <img
                            className="d-block w-100"
                            src={BASEURL + x.nome}
                            alt={"Fotos do prêmio " + data.titulo}
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}