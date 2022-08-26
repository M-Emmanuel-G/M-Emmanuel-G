import styled from "styled-components";

export const AboutMeCamp = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

export const AboutMeContainer = styled.div`
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
`

export const TittleAboutMeCamp = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: crimson;
`

export const MainAboutMeCamp = styled.div`
    width: 100%;
    height: 90%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    label{
        position: relative;
        top: 10px;
        font-size: 25px;
        font-weight: bold;
    }
    p{
        width: 45%;
        font-size: 18px;
        margin-top: 50px;
    }
    img{
        width: 50px;
        height: 50px;
        margin: 20px 10px;
        :hover{
            transform: translateY(-10px);
            transition: .2s ease-in-out;
        }
    }
`
export const MainText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 60vh;
    background: white;
    text-align: center;
    p{
        color: black;
    }
    
`