import styled from 'styled-components';

export const ScreenClientCamp = styled.div`
    width: 100%;
    height: 90%;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InfoClientCamp = styled.div`
    width: 30vw;
    height: 65vh;
    border: 2px solid white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    table{
        width: 100%;
        height: 80%;
        font-size: 20px;
        tr td{
            background: red;
            width: 50px;
            height: 50px;
            text-align: center;
        }
        
    }
`;
export const TittleClient = styled.div`
    width: 100%;
    height: 10%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonCamp = styled.div`
    width: 100%;
    height: 10%;
    background: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 150px;
        height: 30px;
        margin: 0 10px;
    }
`

export const InputEdit = styled.div`
 width: 100%;
 height: 50px;
 background: black;
 display: flex;
 justify-content: center;
 align-items: center;
 display: none;
 input{
    width: 80%;
    height: 20px;
    border-radius: 5px;
    ::placeholder{
        text-align: center;
        font-size: 17px;
        font-weight: bold;
    }
 }
 button{
    margin: 0 10px;
 }
 
`