import styled from "styled-components";

interface Iactive{
    alert?: boolean
}


export const MedicineViewHeaderContainer = styled.div<Iactive>`
    position: relative;
    width: 100%;
    height: 48px;
    background-color: ${(e: Iactive) => e.alert? '#BC0000' : '#004581'};
    border-radius: 12px 12px 0px 0px;
`

export const MedicineViewHeaderName = styled.p`
    color: #ffffff;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
`