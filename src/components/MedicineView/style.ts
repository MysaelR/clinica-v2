import styled from "styled-components";

interface Iactive{
    alert: boolean
}

export const MedicineViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 310px;
    height: 230px;
    border-radius: 15px 15px 12px 12px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    user-select: none;
`


export const MedicineViewButtonsContainer = styled.div`
    width: calc(100% - 34px);
    margin-top: 36px;
    display: flex;
    padding: 0px 17px 0px 17px;
    gap: 16px;

`