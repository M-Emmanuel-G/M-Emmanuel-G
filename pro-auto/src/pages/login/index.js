import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/header/index';
import { ContainerBase } from "../../style"
import { FormLogin, LoginCamp } from './style';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import useRequestData from "../../hooks/useRequestData"

export default function Login() {
    const [ inputCPF, setInputCPF ] = useState("")
    const [ inputPlaca, setInputPlaca ] = useState("")
    const [ data ] = useRequestData("clients.json")
    const navigate = useNavigate()

    const sendLogin = (ev)=>{
        ev.preventDefault()
        localStorage.setItem("cpfCliente", inputCPF)
        localStorage.setItem("placaCliente", inputPlaca)
<<<<<<< proAutoN
        navigate("/telausuario") 

        
        
        data.forEach(client => {
            if(inputCPF === client.cpf && inputPlaca === client.placa){
                navigate("/telausuario")
                
            }
            else{ 
                alert("Cliente nao encontrado...")
            }
        });
         

       
        
        
        
        
        //     const token = data && data.map((c)=>{return c.token})
        //    console.log(token);     
>>>>>>> master
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
            </FormLogin>
        </LoginCamp>
    </ContainerBase>
 );
}