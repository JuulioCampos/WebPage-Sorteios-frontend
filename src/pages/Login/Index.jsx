import React, { useLayoutEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from '../../components/Button/Index';
import { TokenContext } from "../../providers/Token"
import { CheckBox, DivForm, DivLogin } from './Style';
import InputGroup from 'react-bootstrap/InputGroup';
import { postLogin } from '../../services/Requests/Login';

export const Login = (props) => {
    const { token, setToken } = React.useContext(TokenContext)
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [lembrar, setLembrar] = useState()

    useLayoutEffect(() => {
      const emaill = localStorage.getItem("email")
      const senhal = localStorage.getItem("senha")
      const userl = localStorage.getItem("user")
    console.log(emaill)
      if (emaill && senhal && userl) {
        setEmail(emaill)
        setSenha(senhal)
      }
      console.log(email)
      
    }, [])
    const loginUser = () => {
        postLogin(email, senha).then(r => {
                localStorage.setItem('email', JSON.stringify(email));
                localStorage.setItem('senha', JSON.stringify(senha));
                localStorage.setItem('nome', JSON.stringify(r.data.user));
                localStorage.setItem('id', JSON.stringify(r.data.id));
                localStorage.setItem('token', r.data.token);
                setToken({
                    "nome": r.data.user,
                    "id": r.data.id,
                    "token": r.data.token
                })

                if (r.data.token) {
                    window.location.href = ('/administracao')
                }
        })
    }

    return (
        <DivLogin className='d-flex justify-content-center'>
            <Form className='d-flex justify-content-center'>
                <DivForm >
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label >
                            Email
                        </Form.Label>
                        <Col sm="12">
                            <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label >
                            Senha
                        </Form.Label>
                        <Col sm="12">
                            <Form.Control value={senha} type="password" onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
                        </Col>
                    </Form.Group>
                    <CheckBox className="mb-3">
                        <input className={'pl-3'} type="checkbox" onChange={e => setLembrar(e.target.value)} id="lembrar" />
                        <label className='pl-3' htmlFor="lembrar">
                            Lembrar senha
                        </label>
                    </CheckBox>
                    <Col sm={'12'} className={"d-flex justify-content-center"}>
                        <Button onClick={loginUser} className='d-flex justify-content-center'>Logar</Button>
                    </Col>
                </DivForm>
            </Form>
        </DivLogin>
    );
}