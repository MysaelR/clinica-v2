import * as Styled from './styled';
import { ViewInformation } from './ViewInformation';

interface ImedicineViewContent{
    text1: string,
    text2: string,
    text3: string,
    daysText: string
}

export const MedicineViewContent: React.FC<ImedicineViewContent> = ({text1, text2, text3, daysText}) => {


    return(
        <Styled.MedicineViewContentContainer>
            <Styled.MedicineViewContainerTexts>
                <Styled.MedicineViewText>
                    {text1.toUpperCase()}
                    {/* TEMPO PARA VENCER: */}
                </Styled.MedicineViewText>
                <Styled.MedicineViewText>
                    {text2.toUpperCase()}
                    {/* QUANTIDADE RESTANTE: */}
                </Styled.MedicineViewText>
                <Styled.MedicineViewText>
                    {text3.toUpperCase()}
                    {/* LOTE: */}
                </Styled.MedicineViewText>

            </Styled.MedicineViewContainerTexts>
            
            <Styled.MedicineViewContainerInformations>
                <ViewInformation alert information={`30 ${daysText}`}/>
                <ViewInformation alert={false} information='289'/>
                <ViewInformation alert={false} information='005F19A52'/>
            </Styled.MedicineViewContainerInformations>
        </Styled.MedicineViewContentContainer>
    )
}