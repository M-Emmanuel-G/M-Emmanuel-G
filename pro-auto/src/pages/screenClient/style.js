import styled from 'styled-components';

export const ScreenClientCamp = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

export const SideBar = styled.div`
    width: 20%;
    height: 100%;
    text-align: center;
`

export const InfoClientCamp = styled.div`
    width: 60%;
    height: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    margin-top: 20px;
    border-radius:10px ;
`;
export const TittleClient = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    img{
        width: 30px;
        height: 30px;
        :hover{
            transition: .4s;
            transform: scale(1.2);
            cursor: pointer;
        }
    }
    
`

export const InputEdit = styled.div`

 width: 100%;
 height: 90%;
 display: flex;
 justify-content: center;
 align-items: center;
 opacity: 0;
 form{
    display: flex;
    flex-direction: column;
    height: 100%;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        button{
            margin: 10px;
            height: 25px;
            border-radius: 10px;
            border: 1px solid black;
            :hover{
                transition: .4s;
                background: #5b88a5;
                cursor: pointer;
            }
        }
        input{
            width: 200px;
            height: 20px;
            margin: 6px 0;
        }
    }
}

 input{
    border-radius: 5px;
    ::placeholder{
        text-align: center;
        font-size: 17px;
        font-weight: bold;
    }
 }
 
`
export const EachItem = styled.div`
    width: 29vw;
    height: 30px;
    background: white;
    border: 2px solid black;
    margin-top: 20px;
    text-align: end;
    font-size: 18px;
    border-radius: 10px;
    label{
        font-weight: bold;
        position: absolute;
        left: 490px;
    }
`

export const DetailsCar = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 90%;
        height: 150px;
        margin-top: 20px;
        border-radius: 20px;
    }
    label{
        font-weight: bold;
    }
`