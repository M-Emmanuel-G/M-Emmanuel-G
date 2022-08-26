import styled, { keyframes } from "styled-components";

const AnimTittle = keyframes`
    0%{
        opacity: 0;
    };
    100%{
        opacity: 1;
    }
`
const AnimPhoto = keyframes`

    0%{
        opacity: 0;
        transform: translateX(-610px);
    }
 
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`

export const MainContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
`

export const MainPhoto = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
`
export const MainDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    color: white;
    animation: ${AnimTittle} 5s linear;
`

export const Photo = styled.div`
    width: 60%;
    height: 70%;
`

export const Icon = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.BackImage});
    background-size: cover;
    animation: ${AnimPhoto} 3s ease-in-out;
    border-radius: 50%;
`