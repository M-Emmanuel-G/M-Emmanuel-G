import styled from 'styled-components';

export const ContainerHomePage = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
`;

export const ContainerBanner = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        height: 80%;
    }
`

export const ContainerWellcome = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerServices = styled.div`
    width: 100%;
    display: flex;
    background: #a4a5a6;
    justify-content: center;
    flex-wrap: wrap;
`

export const ContainerPrincServices = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h2{
        font-weight: bold;
        font-size: 40px;
    }
    span{
        margin: 1rem 0;
    }
    ::after{
        content: '';
        width: 50%;
        height: 2px;
        background: #424242;
        display: flex;
        margin: 2rem 0;
    }
`

export const ContainerContact = styled.footer`
    width: 100%;
    height: 200px;
    background: #424242;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    img{
        width: 50px;
        height: 50px;
    }
    div{
        margin-top: 1rem;
    }
`

export const ContainerBudget = styled.div`
    width: 100%;
    background: #a4a5a6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div{
        margin-right: 2rem;
        margin-bottom: 7rem;
    }
    form{
        display: flex;
        flex-direction: column;
        input{
            width: 300px;
            height: 20px;
            margin: 1rem 0;
            outline: 0;
            border: none;
            border-bottom: 1px solid black;
            background: none;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
            ::placeholder{
                font-weight: bold;
                color: #333;
                font-size: 1rem;
                text-align: center;
            }
        }
        button{
            width: 300px;
            height: 30px;
            font-size: 1.3rem;
            margin: 1rem 0;
            border-radius: 20px;
            background: #424242;
            border: none;
            color: #fff;
        }
    }
`

export const ContainerPartnerCompanies = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
        width: 100px;
        height: 100px;
        margin: 1rem 2rem;
    }
`