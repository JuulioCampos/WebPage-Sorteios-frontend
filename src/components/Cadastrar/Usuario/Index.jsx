import React, { useState } from "react"
import { Col, Form } from "react-bootstrap"
import { DadosUsuarioContext } from "../../../providers/DadosUsuario"
import { PageAtualCompraContext } from "../../../providers/PageAtualCompra"
import { Api } from "../../../services/Api"
import { maskCpf, maskTelefone, unmaskCpf } from "../../../services/Validations"
import { Button } from "../../Button/Index"
import {CancelButton} from "./Style"

export const FormUsuario = (props) => {
    const { dadosUsuario, setDadosUsuario } = React.useContext(DadosUsuarioContext)
    const {setPageAtualCompra } = React.useContext(PageAtualCompraContext)
    const [sucess, setSucess] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numeroE, setNumeroE] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    
    
    const cadastrarUsuario = () => {
        if (unmaskCpf(cpf).length > 10 && nome.length > 9 && email.length > 10 ) {
            setDadosUsuario({
                'is_novo': true,
                'email': email,
                'telefone': props.telefone,
                'cpf': cpf,
                'nome': nome,
                'nascimento': nascimento,
                'rua': endereco,
                'numero': numeroE,
                'cidade': cidade,
                'cep': cep
            })
        } else {
            alert('preencha os campos corretamente')
        }
        console.log(dadosUsuario.cpf)
        if (dadosUsuario.cpf) {
            console.log(dadosUsuario)
            Api
            .post('/api/cadastra-usuario', {
                data: dadosUsuario
            })
            .then((response) => setSucess(response.data))
            .catch((err) => {
              alert("ops! ocorreu um erro" + err);
            });
        }
        

        if(sucess) {
            setPageAtualCompra(0)
        }
    }
    return (
        <Form className="row">
            <Col sm={12} xs={12}>
                <Form.Group classNa me="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control value={maskTelefone(props.telefone)} disabled />
                </Form.Group>
            </Col>
            <Col sm={12} xs={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail *</Form.Label>
                    <input onChange={(e) => { setEmail(e.target.value) }} class="form-control"placeholder="Digite seu email"   type="email" required />
                </Form.Group>
            </Col>
            <Col sm={12} xs={12}  className="">
                <Form.Group className="mb-3">
                    <Form.Label>Nome completo *</Form.Label>
                    <Form.Control onChange={(e) => { setNome(e.target.value) }} type="text" placeholder="Nome completo" className="px-3" />
                </Form.Group>
            </Col>
            <Col sm={7} xs={7}  className="">
                <Form.Group className="mb-3">
                    <Form.Label>CPF</Form.Label>
                    <input onChange={(e) => { setCpf(maskCpf(e.target.value)) }} value={cpf} maxLength="14" class="form-control" type="text" required/>
                </Form.Group>
            </Col>
            <Col sm={5} xs={5} className="" >
                <Form.Group className="mb-3">
                    <Form.Label>Nasc.</Form.Label>
                    <input onChange={(e) => { setNascimento(e.target.value) }} class="form-control" maxLength="11"  type="date" />
                </Form.Group>
            </Col>
            <Col sm={7} xs={7}>
                <Form.Group  className="mb-3">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control onChange={(e) => { setEndereco(e.target.value) }}  type="text" placeholder="Endereço" />
                </Form.Group>
            </Col>
            <Col sm={5} xs={5}>
                <Form.Group  className="mb-3">
                    <Form.Label>Número</Form.Label>
                    <Form.Control onChange={(e) => { setNumeroE(e.target.value) }}type="text" placeholder="Número" />
                </Form.Group>
            </Col>
            <Col sm ={7} xs={7}>
                <Form.Group onChange={(e) => { setCidade(e.target.value) }} className="mb-3">
                    <Form.Label>Cidade *</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" />
                </Form.Group>
            </Col>
            <Col sm ={5} xs={5}>
                <Form.Group className="mb-3">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control onChange={(e) => { setCep(e.target.value) }}  type="text" placeholder="CEP" maxLength={8} />
                </Form.Group>
            </Col>
            <Col sm ={6} xs={6} className={'text-center d-flex justify-content-center'}>
                <CancelButton onClick={() => setPageAtualCompra(0)} >Alterar telefone</CancelButton>
            </Col>
            <Col sm ={6} xs={6} className={'text-center d-flex justify-content-center'}>
                <Button onClick={cadastrarUsuario} >Cadastrar</Button>
            </Col>
        </Form>

    )
}