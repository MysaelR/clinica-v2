import * as Styled from './style';

interface Ibutton{
    action: () => void
}


export const GetMedicineButton: React.FC<Ibutton> = ({action}) => {

    return(
        <Styled.MedicineButtonContainer type='get' onClick={action}>
            RETIRAR MEDICAMENTO
        </Styled.MedicineButtonContainer>
    )
}