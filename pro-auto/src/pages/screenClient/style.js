import styled from 'styled-components';

export const ScreenClientCamp = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InfoClientCamp = styled.div`
    width: 30vw;
    height: 800px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    table{
        width: 100%;
        height: 70%;
        font-size: 20px;
        tr td{
            width: 50px;
            height: 50px;
            text-align: center;
            img{
                width: 25px;
                :hover{
                transition: .4s;
                transform: scale(1.2);
                cursor: pointer;
            }
            }
        }
        
    }
`;
export const TittleClient = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        position: relative;
        right: 40px;
        width: 40px;
        height: 40px;
        :hover{
            transition: .4s;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
    
`

export const InputEdit = styled.div`
 width: 100%;
 height: 25%;
 display: flex;
 justify-content: center;
 align-items: center;
 opacity: 0;
 form{
    display: flex;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        input{
            width: 300px;
            margin: 6px 0;
        }
    }
    button{
        width: 100px;
        height: 50px;
    }
 }

 input{
    width: 100px;
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
    position: relative;
    left: 60px;
 } 
`