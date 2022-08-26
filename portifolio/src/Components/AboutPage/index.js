import React from "react";
import Tittle from "../tittle";
import { AboutMeCamp, AboutMeContainer, MainAboutMeCamp, MainText, TittleAboutMeCamp } from "./style";
import ImgCss from '../../IMG/css.png'
import ImgHtml from '../../IMG/html.png'
import ImgJS from '../../IMG/javaScript.png'
import ImgReact from '../../IMG/react.png'

function AboutPage(){
    return(
        <>
            <Tittle/>
            <AboutMeCamp>
                <AboutMeContainer>
                    <TittleAboutMeCamp> <h1>Sobre mim...</h1></TittleAboutMeCamp>
                    <MainAboutMeCamp>
                        <MainText>
                           <p>Lorem Ipsun</p>
                        </MainText>
                        <div>
                            <img src={ImgHtml}/>
                            <img src={ImgCss}/>
                            <img src={ImgJS}/>
                            <img src={ImgReact}/>
                        </div>
                    </MainAboutMeCamp>
                </AboutMeContainer>
            </AboutMeCamp>
        </>
    )
}

export default AboutPage