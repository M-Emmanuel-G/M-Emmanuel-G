import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 200px;
    height: 300px;
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10%;
    text-align: center;
    background: #fff;
    img{
        width: 70%;
        height: 50%;
        border-radius: 10%;
        margin: 1rem;
    }
    span{
        margin: 2rem;
        font-size: 1.1rem;
    }
`;