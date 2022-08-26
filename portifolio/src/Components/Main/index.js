import React from "react";
import { Icon, MainContainer, MainDescription, MainPhoto, Photo } from "./style";
import ImgPerfil from "../../IMG/perfil.png" 
import ImgProfile from "../../IMG/profile.jpeg" 

function Main (){
    return(
        <MainContainer>
            <MainPhoto>
                <Photo>
                    <Icon BackImage={ImgProfile} />
                </Photo>
            </MainPhoto>
            <MainDescription>
                <h1>Marcio Emmanuel Gonçalves</h1>
                <h2>Desenvolvedor WEB</h2>
            </MainDescription>
        </MainContainer>
    )
}

export default Main