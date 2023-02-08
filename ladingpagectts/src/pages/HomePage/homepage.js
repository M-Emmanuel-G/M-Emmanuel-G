import React from 'react';
import CardServices from '../../components/CardServices/cardServices';
import Header from '../../components/Header/header';
import { ContainerBase } from '../../style/styleGlobal';
import { ContainerBanner, ContainerBudget, ContainerContact, ContainerHomePage, ContainerPartnerCompanies, ContainerPrincServices, ContainerServices, ContainerWellcome } from './style';

export default function HomePage() {
 return (
   <ContainerBase>
    <Header/>
    <ContainerHomePage>
        <ContainerBanner>
            <img src='https://blog.seventh.com.br/wp-content/uploads/2020/02/2020-02-13.png'/> 
        </ContainerBanner>
        <ContainerWellcome>
            <h2>Principais Soluções e Serviços</h2>
          <ContainerServices>
            <CardServices/>
          </ContainerServices>
          <ContainerPrincServices>
              <h2>Nosso setor de atuação:</h2>
              <span>CIRCUITO FECHADO DE TV ANALOGICO E IP</span>
              <span>SOLUÇÕES DE COMUNICAÇÃO DESENVOLVIDASß  VIA FIBRA ÓPTICA OU RADIO ( SEM FIO )</span>
              <span>AUTOMAÇÕES , PORTAS ,  PORTÕES E CANCELA</span>
              <span>INSTALAÇÃO DE EQUIPAMENTOS  DE CONTROLE DE ACESSO</span>
              <span>COMUNICAÇÃO CONDOMINIAL / INTERFONIA DIGITAL </span>
              <span>ALARMES ELETRONICOS  RESIDENCIAIS , COMERCIAIS , INDUSTRIAIS </span>
              <span>SONORIZAÇÃO DE GRANDES AMBIENTES ( SUPERMERCADOS , SHOPPINGS, IGREJAS  , ESCOLAS , HOSPITAIS  , ETC )</span>
              <span>PROJETO E INSTALAÇÃO DE DISPOSITIVOS DE PROTEÇÃO ANTI SURTO ( DPS ) E  ATERRAMENTOS ( COM ANÁLISES DE RESISTIVIDADE  DE SOLO E EMISSAO DE LAUDO TÉCNICO )  </span>
              <span>DISPONIBILIZAMOS CONTRATO DE MANUTENÇÃO PREVENTIVA E CORRETIVA</span>

          </ContainerPrincServices>
          <ContainerPartnerCompanies>
            <h2>Empresas parceiras</h2>
            <div>
              <img src='https://media.licdn.com/dms/image/C4D0BAQGs6h62AdXGDQ/company-logo_200_200/0/1579282138740?e=2147483647&v=beta&t=5_8UB3uFLJfEPPFMh8Tkm6wkf_ofLkHjM39Gmw3wPcw'/>
              <img src='https://media.glassdoor.com/sqll/2630142/grupo-vdl-squarelogo-1637751263365.png'/>
              <img src='https://pef.echosis.com.br/data/clients/133/Profile%20-%20Jequeri-598-resampled.png'/>
              <img src='http://telluria.com.br/wp-content/uploads/2021/09/concreto-minas-concreteiras-250x250.png'/>
              <img src='https://yt3.googleusercontent.com/qpa0XtGKqVc10qiQKDHyAATlkcD9X-YYKcBX6Ly92VE-Rl-B9tULXeJkSw0A8pWMFTX9r05U=s900-c-k-c0x00ffffff-no-rj'/>
              <img src='https://portalguiaitabirito.com.br/images/usr/525d4c8778.jpg'/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOv-HbDR9wz9SP8vrxsMLp905N2aKzNH2XQRuioa1UFysM7bbOkvggcyWxxhC4MDtcfU&usqp=CAU'/>
            </div>  
          </ContainerPartnerCompanies>
            <ContainerBudget>
              <div>
                <h3>Venha fazer o seu projeto...</h3>
                <h1>Solicite um orçamento!</h1>
              </div>
              <form>
                <input
                  placeholder='Seu nome completo...'
                />
                <input
                  placeholder='Telefone para contato'
                />
                <input
                  placeholder='Email'
                />
                <button>Enviar Solicitacao</button>
              </form>
            </ContainerBudget>
          <ContainerContact>
              <h2>Dúvidas? Fale Conosco</h2>
              <span>  (31)  3979- 1063   WhatsApp: 9 8855-0745</span>
              <span>ctts@ctts.com.br</span>
              <span>mauricio@ctts.com.br</span>
              <div>
                <img src='https://i.pinimg.com/originals/1b/60/f9/1b60f9d42fd84e31b304d5e7779cccfd.png'/>
                <img src='https://cdn-icons-png.flaticon.com/512/3621/3621464.png'/>
              </div>
           </ContainerContact>
        </ContainerWellcome>
    </ContainerHomePage>
   </ContainerBase>
 );
}