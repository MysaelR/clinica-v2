import { Trash } from 'phosphor-react';

import * as Styled from './style';

export const DeleteModal: React.FC = () => {

    return(
        <Styled.DeleteMedicineModalContainer>
            <Trash size={20} color='#fff' weight="bold" style={{'marginLeft': '6px', 'marginRight': '6px'}}/>
            <Styled.DeleteMedicineModalText>Remover</Styled.DeleteMedicineModalText>
        </Styled.DeleteMedicineModalContainer>
    )
}