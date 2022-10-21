/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TokenContext } from "../../../providers/Token";
import { ValidaToken } from "../../../services/Requests/ValidaToken";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Index";
import { Icon } from "../../../components/Icons/Index";
import {  MenuBar } from "./Styles";
import { WHITE } from "../../../colors/Colors";
import { CadastroSorteio } from "../../../components/CadastroSorteios/Index";

export const Administracao = () => {
  const { token, setToken } = React.useContext(TokenContext);
  const [criaSorteio, setCriaSorteio] = useState('')
  const [gestaoUser, setGestaoUser] = useState('')
  const [gestaoSorteio, setGestaoSorteio] = useState('')
  const [configs, setConfigs] = useState('')
  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      localStorage.setItem("token", JSON.stringify(""));
    }

    ValidaToken(token)
      .then((r) => {
        // eslint-disable-next-line
        if (!(r.status == 200)) {
          setToken(undefined);
          localStorage.setItem("token", JSON.stringify(undefined));
        }
      })
      .catch((e) => {
        localStorage.setItem("token", JSON.stringify(undefined));
        setToken(undefined);
      });
  }, []);

  // eslint-disable-next-line
  if (!token || token == "") {
    navigate("/");
    return;
  }
  if (token.length > 50) {
    return (
      <>

        <MenuBar className="">
          <Button
            onClick={() => {
                setCriaSorteio(!criaSorteio) 
                setGestaoUser('')
                setGestaoSorteio('')
                setConfigs('')
            }}
            className={"m-1 mt-2 mb-1 ativo-"+criaSorteio+' ' + (criaSorteio ? '' : 'collapsed')}
            data-toggle="collapse"
            data-target="#criaSorteio"
            aria-expanded={criaSorteio}
            aria-controls="criaSorteio"
          >
            <Icon color={WHITE} iconName={"fa-solid fa-circle-plus"}></Icon>&nbsp;
            Cadastros
          </Button>
          <Button
            onClick={() => {
                setCriaSorteio('') 
                setGestaoUser(!gestaoUser)
                setGestaoSorteio('')
                setConfigs('')
            }}
            className={"m-1 mt-2 mb-1 ativ-"+gestaoUser+' '+(gestaoUser ? '' : 'collapsed') }
            data-toggle="collapse"
            data-target="#gestaoUser"
            aria-expanded={gestaoUser}
            aria-controls="gestaoUser"
          >
            <Icon color={WHITE} iconName={"fa-solid fa-user"}></Icon>&nbsp;
            Usuarios
          </Button>
          <Button
            onClick={() => {
                setCriaSorteio('') 
                setGestaoUser('')
                setGestaoSorteio(!gestaoSorteio)
                setConfigs('')
            }}
            className={"m-1 mt-2 mb-1 ativo-"+gestaoSorteio+' '+(gestaoSorteio ? '' : 'collapsed') }
            data-toggle="collapse"
            data-target="#gestaoSorteio"
            aria-expanded={gestaoSorteio}
            aria-controls="gestaoSorteio"
          >
            <Icon color={WHITE} iconName={"fa-solid fa-bars-progress"}></Icon>&nbsp;
            Gestão Sorteios
          </Button>
          <Button
            onClick={() => {
                setCriaSorteio('') 
                setGestaoUser('')
                setGestaoSorteio('')
                setConfigs(!configs)
            }}
            className={"m-1 mt-2 mb-1 ativo-"+configs+' '+ (configs ? '' : 'collapsed') }
            data-toggle="collapse"
            data-target="#configs"
            aria-expanded={configs}
            aria-controls="configs"
          >
            <Icon color={WHITE} iconName={"fa-solid fa-gear"}></Icon>&nbsp;
            Configs
          </Button>
        </MenuBar>
        
        <div className={"collapse "+ (criaSorteio || gestaoSorteio || gestaoUser || configs ? 'd-block' : '')} id="criaSorteio">
           {
              criaSorteio && <CadastroSorteio></CadastroSorteio>
           } 
           
           {
              gestaoSorteio && <div>teste gestaoSorteio</div>
           } 

           {
              gestaoUser && <div>teste gestaoUser </div>
           } 

           {
              configs && <div>teste configs</div>
           } 

           
        </div>

      </>
    );
  }
};
