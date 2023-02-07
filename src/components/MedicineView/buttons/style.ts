import styled from "styled-components";

interface IbuttonType{
    type: 'get' | 'change'
}


export const MedicineButtonContainer = styled.div<IbuttonType>`
    cursor: pointer;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(e: IbuttonType) => e.type === 'change'? '#004581' : '#ffffff'};
    border: 1px solid #004581;
    border-radius: 5px;
    background-color: ${(e: IbuttonType) => e.type === 'change'? '#ffffff' : '#004581'};
    font-weight: 700;
    font-size: 9px;
`