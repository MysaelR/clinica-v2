import { useState } from 'react';

import { ChangeMedicineDataButton } from './buttons/ChangeMedicineDataButton';
import { GetMedicineButton } from './buttons/GetMedicineButton';
import { DeleteMedicineModal } from './DeleteModal';
import { MedicineViewContent } from './MedicineViewContent';
import { MedicineViewHeader } from './MedicineViewHeader';
import * as Styled from './style';
import { useTranslation } from 'react-i18next';

export const MedicineView: React.FC = () => {

    const { t } = useTranslation();

    const [showDeleteModal, setShowDeleteModal] = useState(false);


    return(
        <Styled.MedicineViewContainer>
            {
                showDeleteModal && <DeleteMedicineModal name={t('Components.MedicineView.Buttons.Delete')}/>
            }
            <MedicineViewHeader name='Nome' dotsThreeAction={ () => setShowDeleteModal((r) => !r)}/>
            
            <MedicineViewContent
                text1={t('Components.MedicineView.TimeToExpiration')}
                text2={t('Components.MedicineView.RemainingQuantity')}
                text3={t('Components.MedicineView.Batch')}
                daysText={t('Components.MedicineView.Days')}
            />
            
            <Styled.MedicineViewButtonsContainer>
                <ChangeMedicineDataButton buttonName={t('Components.MedicineView.Buttons.ChangeData')} action={() => {}}/>
                <GetMedicineButton buttonName={t('Components.MedicineView.Buttons.GetMedicine')} action={() => {}}/>
            </Styled.MedicineViewButtonsContainer>
        </Styled.MedicineViewContainer>
    )
}