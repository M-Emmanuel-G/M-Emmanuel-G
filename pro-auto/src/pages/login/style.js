import styled from 'styled-components';

export const LoginCamp = styled.div`
    width: 100%;
    height: 90%;
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
    border-radius: 10px;
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
        border: none;
        background: none;
        font-size: 20px;
        ::placeholder{
            text-align: center;
            font-weight: bold;
            font-size: 20px;
        }
        :focus{
            outline: 0;
        }
        :hover{
            border: 2px solid black;
        }
    }
    
    div{
        width: 100%;
        height: 30%;
        border-radius: 10px;
        background: #191013;    
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        button{
            width: 200px;
            height: 30px;
            border-radius: 10px;
            background: #19f205;
            border: none;
            font-size: 19px;
            font-weight: bold;
            :hover{
                transform: scale(1.1);
                transition: .4s ease-in-out;
                cursor: pointer;
            }
        }
    }
`;