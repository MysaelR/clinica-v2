import * as Styled from './styled';
import { ViewInformation } from './ViewInformation';

export const MedicineViewContent: React.FC = () => {


    return(
        <Styled.MedicineViewContentContainer>
            <Styled.MedicineViewContainerTexts>
                <Styled.MedicineViewText>
                    TEMPO PARA VENCER:
                </Styled.MedicineViewText>
                <Styled.MedicineViewText>
                    QUANTIDADE RESTANTE:
                </Styled.MedicineViewText>
                <Styled.MedicineViewText>
                    LOTE:
                </Styled.MedicineViewText>

            </Styled.MedicineViewContainerTexts>
            
            <Styled.MedicineViewContainerInformations>
                <ViewInformation alert information='30 dias'/>
                <ViewInformation alert={false} information='289'/>
                <ViewInformation alert={false} information='005F19A52'/>
            </Styled.MedicineViewContainerInformations>
        </Styled.MedicineViewContentContainer>
    )
}