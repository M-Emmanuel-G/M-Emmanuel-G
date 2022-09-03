import React, { useContext, useState } from 'react';
import HeaderContainer from '../../components/header';
import { ContainerBase } from '../../style';
import { ButtonCamp, InfoClientCamp, ScreenClientCamp, TittleClient, InputEdit } from './style';
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { useEffect } from 'react';
import { ClientContext } from '../../context/context';
import ImgSend from "../../img/send.png"
import ImgBack from "../../img/back.png"
import ImgEdit from "../../img/edit.png"

function ScreenClient() {
    const navigate = useNavigate()
    const [ data ] = useRequestData("clients.json")
    const [ inputEdit, setInputEdit ] = useState("")
    const context = useContext(ClientContext)
    const [ iRua, setIRua ] = useState("")
    const [ iNumero, setINumero ] = useState("")
    const [ iBairro, setIBairro ] = useState("")
    const [ iCidade, setICidade ] = useState("")
    const [ iEstado, setIEstado ] = useState("")

    useEffect(()=>{
        const client = data.filter(client=> client.cpf === localStorage.getItem("cpfCliente") && client.placa === localStorage.getItem("placaCliente"));
        context.setRenderClient(client)
    },[data])

    const sendEdit = (ev)=>{
        ev.preventDefault()
        setInputEdit(`${iRua},${iNumero},${iBairro},${iCidade},${iEstado} `)
        document.getElementById("editCamp").style.opacity = 0
        const edited = context.renderClient.map((c)=>{
            return {...c, address:inputEdit}
           })
           context.setRenderClient(edited)
    }

    const cancelEdit = ()=>{
        document.getElementById("editCamp").style.opacity = 0
    }

    const edit = (ev)=>{
        ev.preventDefault()
        document.getElementById("editCamp").style.opacity = 1
    }

 return (
   <div>
    <ContainerBase>
        <HeaderContainer/>
        <ScreenClientCamp>
            <InfoClientCamp>
                {context.renderClient.map((c, key)=>{
                    
                    return(
                        <>
                            <TittleClient>
                                <img onClick={()=>{navigate("/login")}} src={ImgBack}/>
                                <h1>Informações</h1>
                            </TittleClient>
                            <table key={key}>
                                <thead>
                                    <tr>
                                        <td>Cliente:</td>
                                        <td>{c.name}</td>
                                        <td><img onClick={()=>{alert("Entre em contato conosco para atualizar esta informação.")}} src={ImgEdit}/></td>
                                    </tr>
                                    <tr>
                                        <td>CPF:</td>
                                        <td>{c.cpf}</td>
                                        <td><img onClick={()=>{alert("Entre em contato conosco para atualizar esta informação.")}} src={ImgEdit}/></td>
                                    </tr>
                                    <tr>
                                        <td>Placa:</td>
                                        <td>{c.placa}</td>
                                        <td><img onClick={()=>{alert("Entre em contato conosco para atualizar esta informação.")}} src={ImgEdit}/></td>
                                    </tr>
                                    <tr>
                                        <td>Endereço:</td>
                                        <td>{c.address}</td>
                                        <td><img onClick={edit} src={ImgEdit}/></td>
                                    </tr>
                                    <tr>
                                        <td>Telefone:</td>
                                        <td>{c.phone}</td>
                                        <td><img onClick={()=>{alert("Entre em contato conosco para atualizar esta informação.")}} src={ImgEdit}/></td>
                                    </tr>
                                </thead>
                            </table>
                <InputEdit id='editCamp'>
                    <form onSubmit={sendEdit}>
                        <div>
                            <input
                                value={iRua}
                                onChange={(ev)=>{setIRua(ev.target.value)}}
                                placeholder='rua/avenida'
                            />
                            <input
                                value={iNumero}
                                onChange={(ev)=>{setINumero(ev.target.value)}}
                                placeholder='numero'
                            />
                            <input
                                value={iBairro}
                                onChange={(ev)=>{setIBairro(ev.target.value)}}
                                placeholder='bairro'
                            />
                            <input
                                value={iCidade}
                                onChange={(ev)=>{setICidade(ev.target.value)}}
                                placeholder='cidade'
                            />
                            <input
                                value={iEstado}
                                onChange={(ev)=>{setIEstado(ev.target.value)}}
                                placeholder='estado'
                            />
                        </div>
                        <div>
                            <button>send</button>
                            <button onClick={cancelEdit} type='button'>Cancelar</button>
                        </div>
                    </form>
                </InputEdit>
                        </>
                    )
                })}
            </InfoClientCamp>
        </ScreenClientCamp>
        
    </ContainerBase>
   </div>
 );
}

export default ScreenClient