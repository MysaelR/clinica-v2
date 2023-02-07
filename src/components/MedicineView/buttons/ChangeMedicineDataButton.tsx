import * as Styled from './style';

interface Ibutton{
    action: () => void
}

export const ChangeMedicineDataButton: React.FC<Ibutton> = ({action}) => {

    return(
        <Styled.MedicineButtonContainer type='change' onClick={action}>
            ALTERAR DADOS
        </Styled.MedicineButtonContainer>
    )
}