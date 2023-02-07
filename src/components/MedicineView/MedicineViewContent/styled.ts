import styled from "styled-components";

export const MedicineViewContentContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 81px;
    display: flex;
`


export const MedicineViewContainerTexts = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const MedicineViewText = styled.p`
    margin-left: 14px;
    font-weight: 700;
    font-size: 10px;
    color: #004581;
    line-height: 0;
`



export const MedicineViewContainerInformations = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-shrink: initial;
    gap: 10px;
    margin: 0;
`