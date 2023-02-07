import styled from "styled-components";

interface Iactived{
    active: boolean,
    moveX: number,
    moveY: number

};


export const LanguageOptionContainer = styled.div<Iactived>`
    position: absolute;
    cursor: pointer;
    width: ${(e: Iactived) => e.active? 50 : 30}px;
    height: ${(e: Iactived) => e.active? 50 : 30}px;
    transition: 0.5s;
    background-color: #FF6C2F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: move(40);
    left: ${(e: Iactived) => e.active? e.moveX : 10}px;
    top: ${(e: Iactived) => e.active? e.moveY : 10}px;
    visibility: ${(e: Iactived) => e.active? 'visible' : 'hidden'};
`
