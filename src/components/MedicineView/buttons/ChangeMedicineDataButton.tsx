import * as Styled from './style';

interface Ibutton{
    buttonName: string,
    action: () => void
}

export const ChangeMedicineDataButton: React.FC<Ibutton> = ({buttonName ,action}) => {

    return(
        <Styled.MedicineButtonContainer type='change' onClick={action}>
            {buttonName.toUpperCase()}
            {/* ALTERAR DADOS */}
        </Styled.MedicineButtonContainer>
    )
}