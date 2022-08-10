import styled from "styled-components";

export const TittleContainer = styled.div`
    width: 100%;
    height: 10vh;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        color: white;
        margin: 0 50px;
        font-weight: bold;
        font-family:'Courier New', Courier, monospace;
        font-size: 50px;
        :hover{
            color:crimson;
            cursor: pointer;
        }
    }
    nav{
        color: white;
        margin: 0 10px;
        display: flex;
        
    }

    nav li{
        list-style-type: none;
        margin: 0 20px;
        :hover{
            color:crimson;
            cursor: pointer;
        }
    }
`