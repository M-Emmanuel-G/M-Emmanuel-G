import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/header/index';
import { ContainerBase } from "../../style"
import { FormLogin, LoginCamp } from './style';
import {useNavigate} from "react-router-dom";
import useRequestData from "../../hooks/useRequestData"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useProtectPage } from '../../hooks/useProtectPage';
import ImgFB  from "../../img/facebook.png"
import ImgInsta  from "../../img/instagram.png"

export default function Login() {
    const [ inputCPF, setInputCPF ] = useState("")
    const [ inputPlaca, setInputPlaca ] = useState("")
    const [ data ] = useRequestData("clients.json")
    const navigate = useNavigate()
    const [ verify , setVerify ] = useState([])
    useProtectPage()

    const sendLogin = (ev)=>{
        ev.preventDefault()
        localStorage.setItem("cpfCliente", inputCPF)
        localStorage.setItem("placaCliente", inputPlaca)
        const verify = data.filter(c=>c.cpf === localStorage.getItem("cpfCliente")).length
        if(verify >= 1){
            localStorage.setItem("token", "smakljcemlamnsoiaslçmnasjdnsakmmioqc") // simulando um token para proteção d apagina
            navigate("/telausuario")
        }else{
            toast.error("Cliente não encontrado!")
        }
    }
    return (
    <ContainerBase>
        <HeaderContainer/>
        <LoginCamp>
            <FormLogin onSubmit={sendLogin}>
                <div>
                    <h2>Acesse sua conta...</h2>
                </div>
                <fieldset>
                    <label>CPF</label>
                    <input
                        value={inputCPF}
                        onChange={(ev)=>{setInputCPF(ev.target.value)}} 
                        required
                        autoFocus
                        placeholder="Somente nùmeros"
                        maxLength={11}
                    />
                    <label>Placa do veiculo</label>
                    <input 
                        value={inputPlaca}
                        onChange={(ev)=>{setInputPlaca(ev.target.value)}}
                        placeholder='Placa do veiculo'
                        required
                        maxLength={7}
                        />
                </fieldset>
                <div>
                    <button>Acessar</button>
                    {/* <button onClick={()=>{navigate("/telausuario")}}>Acessar</button> */}
                </div>
                <footer>
                    <a href='https://pt-br.facebook.com/proautoprotecao/'><img src={ImgFB}/></a>
                    <a href='https://www.instagram.com/proautoprotecao/'><img src={ImgInsta}/></a>
                </footer>
            </FormLogin>
        </LoginCamp>
        <ToastContainer/>
    </ContainerBase>
 );
}