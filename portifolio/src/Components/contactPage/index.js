import React from "react";
import Tittle from "../tittle";
import { ContactPageCamp, ContactPageContainer, TittleContactPage } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactPage(){
    return(
        <>
            <Tittle/>
            <ContactPageContainer>
                <TittleContactPage>
                    <h1>Contatos</h1>
                </TittleContactPage>
                <ContactPageCamp>
                    <table>
                        <th>
                            <th>Telefone:</th>
                            <td>(31)9 8932-5415</td>
                        </th>
                        <tr>
                            <th>
                                <th>Email:</th>
                                <td> Emmanuel-jnr@hotmail.com</td>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <th>Repositorio Git-Hub:</th>
                                <td> <a href="https://github.com/M-Emmanuel-G">Link Git-Hub</a></td>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <th>Curriculo:</th>
                                <td><p onClick={() => toast.warn("Download em manutenção")}>Download</p></td>
                            </th>
                        </tr>
                    </table>
                    <ToastContainer/>
                </ContactPageCamp>
            </ContactPageContainer>
        </>
    )
}

export default ContactPage