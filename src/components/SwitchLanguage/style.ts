import styled from "styled-components";

interface Iactived{
    active: boolean
};

export const SwitchLanguageContainer = styled.div<Iactived>`
    position: absolute;
    cursor: pointer;
    right: 120px;
    top: 180px;
    width: ${(e: Iactived) => e.active? 30 : 50}px;
    height: ${(e: Iactived) => e.active? 30 : 50}px;
    transition: 0.3s;
    background-color: #004581;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  
`

