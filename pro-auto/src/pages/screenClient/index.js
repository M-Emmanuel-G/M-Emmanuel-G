import React, { useState } from 'react';
import HeaderContainer from '../../components/header';
import { ContainerBase } from '../../style';
import { ButtonCamp, InfoClientCamp, ScreenClientCamp, TittleClient, InputEdit } from './style';
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

function ScreenClient() {
    const [renderClient, setRenderClient] = useState([])
    const navigate = useNavigate()
    const [ data ] = useRequestData("clients.json")
    const [ inputEdit, setInputEdit ] = useState("")

    useEffect(()=>{
        const client = data.filter(client=> client.cpf === localStorage.getItem("cpfCliente") && client.placa === localStorage.getItem("placaCliente"));
        setRenderClient(client)
    },[data])

    const showEdit= ()=>{
        document.getElementById("editCamp").style.display = "flex"

        
    }
    
    const sendEdit = (ev)=>{
        ev.preventDefault()
        const edited = renderClient.map((c)=>{
            console.log(c);
            return {...c, address:inputEdit}
           })
           setRenderClient(edited)
           document.getElementById("editCamp").style.display = "none"
    }
 return (
   <div>
    <ContainerBase>
        <HeaderContainer/>
        <ScreenClientCamp>
            <InfoClientCamp>
                {renderClient.map((c, key)=>{
                    
                    return(
                        <>
                            <TittleClient> <h1>Informações</h1></TittleClient>
                            <table key={key}>
                                <thead>
                                    <tr>
                                        <td>Cliente:</td>
                                        <td>{c.name}</td>
                                    </tr>
                                    <tr>
                                        <td>CPF:</td>
                                        <td>{c.cpf}</td>
                                    </tr>
                                    <tr>
                                        <td>Placa:</td>
                                        <td>{c.placa}</td>
                                    </tr>
                                    <tr>
                                        <td>Endereço:</td>
                                        <td>{c.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Telefone:</td>
                                        <td>{c.phone}</td>
                                    </tr>
                                </thead>
                            </table>
                <ButtonCamp>
                    <button onClick={()=>{navigate("/login")}}>voltar</button>
                    <button onClick={showEdit}>Editar</button>
                </ButtonCamp>
                <InputEdit id='editCamp'>
                    <input
                        value={inputEdit}
                        onChange={(ev)=>{setInputEdit(ev.target.value)}}
                        placeholder='rua/avenida,numero, bairro, cidade, estado '
                    />
                    <form onSubmit={sendEdit}>
                        <button>send</button>
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