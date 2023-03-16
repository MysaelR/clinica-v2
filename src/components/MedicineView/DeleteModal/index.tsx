import { Trash } from 'phosphor-react';

import * as Styled from './style';


interface IdeleteMedicineModal{
    name: string
}

export const DeleteMedicineModal: React.FC<IdeleteMedicineModal> = ({name}) => {

    return(
        <Styled.DeleteMedicineModalContainer>
            <Trash size={20} color='#fff' weight="bold" style={{'marginLeft': '6px', 'marginRight': '6px'}}/>
            <Styled.DeleteMedicineModalText>{name.toUpperCase()}</Styled.DeleteMedicineModalText>
        </Styled.DeleteMedicineModalContainer>
    )
}