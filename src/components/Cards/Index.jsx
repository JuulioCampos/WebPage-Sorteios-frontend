import { ProgressBar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Index';
import { Cota, SCard, Sdiv, Span } from './Style';
import { BASEURL } from '../../services/Api.js';

export const Cards = (props) => {
    const data = props.data;
    // console.log('card', data.fotos[0].nome)
    return (
        <SCard style={{ width: '18rem' }}>
            <Card.Img variant="top" src={BASEURL + data.fotos[0].nome} />
            <Card.Body>
                <Cota>
                    <p><b>Preço cota: </b></p>
                    <p>&nbsp;R${data.valor_cota.replace('.', ',') ?? '0,60'}</p>
                </Cota>
                <Card.Title style={ {marginTop: "-30px"} }className="text-center">{data.titulo ?? 'Titulo'}</Card.Title>
                <Card.Text>
                    {data.descricao ?? 'description'}
                </Card.Text>
                <Sdiv>
                    {/* <p><b>Valor da cota: </b>{data.preco_promocional ? <strike>{(!data.preco_promocional ? data.preco : null) ?? "R$0,60"}</strike> }</p> */}
                    <p><b>Valor no PIX </b>R${data.valor_aproximado ?? '16.000,00'}</p>
                    <p><b>Status: </b>{data.status ?? "Aguardando"}</p>
                </Sdiv>
                <ProgressBar now={data.porcentagem ?? 30} label={(data.porcentagem ?? 30) + '%'} />
                <Span>Concluído</Span>
                <br />
                <Link to={'/sorteio/'+data.id}>
                    <Button label={'Ver sorteio'}>Ver sorteio </Button>
                </Link>
            </Card.Body>
        </SCard>
    );
}