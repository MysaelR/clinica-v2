import styled from "styled-components";

interface Ialert{
    alert: boolean
}
export const ViewInformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: calc(100% - 6px);
    padding-right: 6px;
    height: 21px;
    background-color: ${(e: Ialert) => e.alert? '#BC0000' : '#004581'};
    font-weight: 700;
    font-size: 10px;
    border-radius: 15px 0px 0px 15px;
    color: #fff;
`