import * as Styled from './style'

interface IviewInformation{
    information: string,
    alert: boolean
}

export const ViewInformation: React.FC<IviewInformation> = ({information, alert}) => {


    return(
        <Styled.ViewInformationContainer alert={alert}>
            {information}
        </Styled.ViewInformationContainer>
    )
}