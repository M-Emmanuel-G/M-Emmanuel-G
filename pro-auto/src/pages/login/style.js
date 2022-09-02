import styled from 'styled-components';

export const LoginCamp = styled.div`
    width: 100%;
    height: 90%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 65vh;
    border: 2px solid black;
    border-radius: 20px;
    h2{
        width: 100%;
        text-align: center;
    }
    fieldset{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70%;
        border: none;
        label{
            font-size: 25px;
            font-weight: bold;
        }
    }
    input{
        width: 20vw;
        height: 30px;
        margin: 20px 0;
        border-radius: 10px;
        ::placeholder{
            text-align: center;
            font-weight: bold;
            font-size: 17px;
        }
    }
    div{
        width: 100%;
        height: 30%;
        background: red;    
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            width: 200px;
            height: 30px;
            border-radius: 10px;
        }
    }
`;