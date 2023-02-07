import { useState } from 'react';

import { ChangeMedicineDataButton } from './buttons/ChangeMedicineDataButton';
import { GetMedicineButton } from './buttons/GetMedicineButton';
import { DeleteModal } from './DeleteModal';
import { MedicineViewContent } from './MedicineViewContent';
import { MedicineViewHeader } from './MedicineViewHeader';
import * as Styled from './style';

export const MedicineView: React.FC = () => {


    const [showDeleteModal, setShowDeleteModal] = useState(false);


    return(
        <Styled.MedicineViewContainer>
            {
                showDeleteModal && <DeleteModal/>
            }
            <MedicineViewHeader name='Nome' dotsThreeAction={ () => setShowDeleteModal((r) => !r)}/>
            
            <MedicineViewContent/>
            
            <Styled.MedicineViewButtonsContainer>
                <ChangeMedicineDataButton action={() => {}}/>
                <GetMedicineButton action={() => {}}/>
            </Styled.MedicineViewButtonsContainer>
        </Styled.MedicineViewContainer>
    )
}