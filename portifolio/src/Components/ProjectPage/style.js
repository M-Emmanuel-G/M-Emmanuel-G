import styled from "styled-components";
 export const ProjectContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 50px;
        position: relative;
        bottom: 30px;
        color: crimson;
    }
 `
export const ProjectItens = styled.div`
    width: 60vw;
    height: 70vh;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    bottom: 30px;
    display: flex;
    flex-wrap: wrap;
 `

 export const EachProject = styled.div`
    width: 165px;
    height: 220px;
    background: white;
    margin: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
      width: 150px;
      height: 120px;
      margin: 10px 0;
    }
    label{
      font-weight: bold;
    }
    a{
      background: none;
      margin: 10px 0;
      cursor: pointer;
      text-decoration: none;
      color: black;
      font-weight: 400;
      :hover{
         transform: scale(1.2);
         transition: .4s ease-in-out;
      }
    }
 `