import React from 'react';
import {TittleContainer} from "./style"
import ImgLogo from "../../img/logo.png"

function HeaderContainer() {
 return (
    <TittleContainer>
        <img src={ImgLogo}/>
    </TittleContainer>
 );
}

export default HeaderContainer