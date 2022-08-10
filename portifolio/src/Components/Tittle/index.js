import React from "react";
import { TittleContainer } from "./style";

import {useNavigate} from 'react-router-dom'

function Tittle(props){

    const Navigate = useNavigate();


    return(
        <TittleContainer>
            <h1 onClick={()=>{Navigate("/Home")}}>M</h1>
            <nav>
                <li onClick={()=>{Navigate("/Projetos")}}>Projetos</li>
                <li onClick={()=>{Navigate('/Contato')}}>Contato</li>
                <li onClick={()=>{Navigate('/SobreMim')}}>Sobre Mim</li>
            </nav>
        </TittleContainer>
    )
}

export default Tittle