import { DotsThreeOutline } from 'phosphor-react';

import * as Styled from './style'

interface ImedicineViewHeader{
    alert?: boolean;
    name: string;
    dotsThreeAction: () => void
}

export const MedicineViewHeader: React.FC<ImedicineViewHeader> = ({name, alert, dotsThreeAction}) => {

    return(
        <Styled.MedicineViewHeaderContainer alert={alert}>
            <DotsThreeOutline
                width={18}
                height={18}
                color={'#fff'}
                style={{
                    'position': 'absolute',
                    'right': '15',
                    'cursor': 'pointer'
                }}
                onClick={dotsThreeAction}
            
            />
            <Styled.MedicineViewHeaderName>
                {name}    
            </Styled.MedicineViewHeaderName>
            
        </Styled.MedicineViewHeaderContainer>
    )
}