import styled from "styled-components";

export const ContactPageContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: linear-gradient(36deg, rgba(12,13,13,1) 26%, rgba(54,52,52,1) 76%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TittleContactPage = styled.div`
    width: 30%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

export const ContactPageCamp = styled.div`
    width: 30%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.2);
    table{
        width: 100%;
        color: white;
        font-size: 18px;
        th{
            width: 150px;
        }
        td{
            width: 250px;
            height: 40px;
            position: relative;
            left: 40px;
        }
        p{
            cursor: pointer;
            :hover{
                transform: scale(1.2);
                transition: .4s;
                color: crimson;
                text-decoration: underline;
            }
        }
        a{
            cursor: pointer;
            color: white;
            text-decoration: none;
            :hover{
                transform: scale(1.2);
                transition: .4s;
                color: crimson;
                text-decoration: underline;
            }
        }
    }
`