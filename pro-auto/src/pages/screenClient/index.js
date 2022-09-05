import React, { useContext, useState } from 'react';
import HeaderContainer from '../../components/header';
import { ContainerBase } from '../../style';
import { InfoClientCamp, ScreenClientCamp, TittleClient, InputEdit, SideBar, EachItem, DetailsCar } from './style';
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData';
import { useEffect } from 'react';
import { ClientContext } from '../../context/context';
import ImgSend from "../../img/send.png"
import ImgBack from "../../img/back.png"
import ImgEdit from "../../img/edit.png"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useProtectPage } from '../../hooks/useProtectPage';
import Swal from 'sweetalert2';

function ScreenClient() {
    const [ data ] = useRequestData("clients.json")
    const [ inputEdit, setInputEdit ] = useState("")
    const [ iRua, setIRua ] = useState("")
    const [ iNumero, setINumero ] = useState("")
    const [ iBairro, setIBairro ] = useState("")
    const [ iCidade, setICidade ] = useState("")
    const [ iEstado, setIEstado ] = useState("")
    const navigate = useNavigate()
    const context = useContext(ClientContext)
    useProtectPage()

    useEffect(()=>{
        const client = data.filter(client=> client.cpf === localStorage.getItem("cpfCliente") && client.placa === localStorage.getItem("placaCliente"));
    },[data])

    const sendEdit = (ev)=>{
        ev.preventDefault()
        setInputEdit(`${iRua},${iNumero},${iBairro},${iCidade},${iEstado} `)
        document.getElementById("editCamp").style.opacity = 0
        alert(inputEdit)
        const edited = context.renderClient.map((c)=>{
            return {...c, address:inputEdit}
           })
           context.setRenderClient(edited)
           toast.success("Alteração salva com sucesso!")
    }

    const cancelEdit = ()=>{
        document.getElementById("editCamp").style.opacity = 0
    }

    const edit = (ev)=>{
        ev.preventDefault()
        document.getElementById("editCamp").style.opacity = 1
    }

    const logout = ()=>{
        Swal.fire({
            title: 'Logout',
            text: "Deseja realizar o logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear("token")
                navigate("/login")
            }
          })
    }

 return (
   <div>
    <ContainerBase>
        <HeaderContainer/>
        <ScreenClientCamp>
            <SideBar>
                <DetailsCar>
                    {context.renderClient.map((c, key)=>{
                        return(
                            <>
                                <img src={c.photo}/>
                                <div>
                                    <label>Carro:</label>
                                    <p>{c.nameCar}</p>
                                </div>
                                <div>
                                    <label>Fabricação:</label>
                                    <p>{c.ageCar}</p>
                                </div>
                                <div>
                                    <label>Cor:</label>
                                    <p>{c.colorCar}</p>
                                </div>
                                <div>
                                    <label>Chassi:</label>
                                    <p>{c.chassi}</p>
                                </div>
                            </>
                        )
                    })}
                </DetailsCar>
            </SideBar>
            <InfoClientCamp>
                {context.renderClient.map((c, key)=>{
                    
                    return(
                        <>
                            <TittleClient>
                                <img onClick={logout} src={ImgBack}/>
                                <h1>Informações</h1>
                                <img onClick={edit} src={ImgEdit}/>
                            </TittleClient>
                            <div key={key}>
                                <EachItem><label>Cliente</label>{c.name}</EachItem>
                                <EachItem><label>CPF</label>{c.cpf}</EachItem>
                                <EachItem><label>Placa Veiculo</label>{c.placa}</EachItem>
                                <EachItem><label>Endereço</label>{c.address}</EachItem>
                                <EachItem><label>Telefone</label>{c.phone}</EachItem>
                            </div>
                        </>
                    )
                })}
            </InfoClientCamp>
            <SideBar>
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
                            <button>Atualizar</button>
                            <button onClick={cancelEdit} type='button'>Cancelar</button>
                        </div>
                    </form>
                </InputEdit>
            </SideBar>
        </ScreenClientCamp>
    </ContainerBase>
    <ToastContainer/>
   </div>
 );
}

export default ScreenClient