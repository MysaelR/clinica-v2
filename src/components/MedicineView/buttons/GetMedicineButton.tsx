import * as Styled from './style';

interface Ibutton{
    buttonName: string,
    action: () => void
}


export const GetMedicineButton: React.FC<Ibutton> = ({buttonName ,action}) => {

    return(
        <Styled.MedicineButtonContainer type='get' onClick={action}>
            {buttonName.toUpperCase()}
            {/* RETIRAR MEDICAMENTO */}
        </Styled.MedicineButtonContainer>
    )
}