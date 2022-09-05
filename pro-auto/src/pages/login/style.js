import styled from 'styled-components';
import backImage from '../../img/background.jpg'

export const LoginCamp = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 70vh;
    border-radius: 10px;
     background: rgba(1,1,1,0.2);
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
            color: white;
        }
        :focus{
            outline: 0;
            border: 2px solid black;

        }
        :hover{
            border: 2px solid black;
        }
    }
    
    div{
        width: 100%;
        height: 30%;
        border-radius: 10px;
        /* background: rgba(1,1,1,0.2);     */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        button{
            width: 200px;
            height: 30px;
            border-radius: 10px;
            background: none;
            border: 1px solid black;
            font-size: 19px;
            font-weight: bold;
            :hover{
                background: #19f205;
                transform: scale(1.1);
                transition: .4s ease-in-out;
                cursor: pointer;
            }
        }
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 30px;
            height: 30px;
            margin: 10px 20px;
        }
    }
`;