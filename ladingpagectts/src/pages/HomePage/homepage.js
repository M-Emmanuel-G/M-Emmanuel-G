import React from 'react';
import Header from '../../components/Header/header';
import { ContainerBase } from '../../style/styleGlobal';
import { ContainerBanner, ContainerHomePage, ContainerWellcome } from './style';

export default function HomePage() {
 return (
   <ContainerBase>
    <Header/>
    <ContainerHomePage>
        <ContainerBanner>
            <h1>Banneer</h1>
        </ContainerBanner>
        <ContainerWellcome><h1>WellCome</h1></ContainerWellcome>
    </ContainerHomePage>
   </ContainerBase>
 );
}