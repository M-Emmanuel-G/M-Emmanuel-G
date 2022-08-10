import React, { useState } from "react";
import LayoutCont from "./layout";
import ProjectPage from "./ProjectPage";
import { BrowserRouter, Routes, useNavigate, Route } from 'react-router-dom'
import AboutPage from "./AboutPage";
import ContactPage from "./contactPage";

function Selector (){
    const [ Projects, SetProjects ] = useState([
        {titulo: "Projeto 1",},
        {titulo: "Projeto 2",},
        {titulo: "Projeto 3",}
    ])

    return(
        // <LayoutCont/>
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <LayoutCont
                        Projects = {Projects}
                        SetProjects = {SetProjects}
                    />
                }/>
                <Route path="/Home" element={<LayoutCont Projects = {Projects} SetProjects = {SetProjects}/>}/>
                <Route path="/Projetos" element={<ProjectPage Projects = {Projects} SetProjects = {SetProjects}/>}/>
                <Route path="/SobreMim" element={<AboutPage/>}/>
                <Route path="/Contato" element={<ContactPage/>}/>
            </Routes>
        </BrowserRouter>
        // <ProjectPage
        //     Projects = {Projects}
        //     SetProjects = {SetProjects}
        // />
    )
}

export default Selector