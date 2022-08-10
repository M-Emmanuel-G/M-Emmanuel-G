import React from "react";
import { LayoutContainer } from "../layout/style";
import Tittle from "../tittle";
import { EachProject, ProjectContainer, ProjectItens } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MockPojects from '../mockProjetos/index'

function ProjectPage(){
    return(
        <LayoutContainer>
            <Tittle/>
            <ProjectContainer>
            <h2>Meus Projetos:</h2>
                <ProjectItens>
                 {MockPojects.map((project)=>{
                    return(
                        <EachProject>
                            <img src={project.photo}/>
                            <label>{project.tittle}</label>
                            <a href={project.link}> Link do Projeto </a>
                        </EachProject>
                    )
                 })}
                 <ToastContainer/>
                </ProjectItens>
            </ProjectContainer>
        </LayoutContainer>
    )
}

export default ProjectPage