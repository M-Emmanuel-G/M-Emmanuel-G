import React from 'react';
import { ContainerHeader, ContainerLogo, ContainerNavigation } from './style';

export default function Header() {
 return (
   <ContainerHeader>
    <ContainerLogo>
      <img src='https://yata-apix-c8896bdc-0006-4f17-a098-caf2336e8ee5.s3-object.locaweb.com.br/3172e4dff87c49dfa33a99fe50313a7a.png'/>

    </ContainerLogo>
    <ContainerNavigation>
      <h1>Central Tecnica de Tecnologia e Seguranca</h1>
    </ContainerNavigation>
      
   </ContainerHeader>
 );
}