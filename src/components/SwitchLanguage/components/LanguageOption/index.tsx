import { ForwardRefExoticComponent, RefAttributes } from "react";

import * as Styled from './style';

interface IlanguageOption{
    actived: boolean,
    moveX: number,
    moveY: number,
    Icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>> | any,
    action?: () => void
}

export const LanguageOption: React.FC<IlanguageOption> = ({actived, moveX, moveY, Icon, action}) => {


    return(
        <Styled.LanguageOptionContainer
            active={actived}
            moveX={moveX}
            moveY={moveY}
            onClick={action}
        >
        
        <Icon/>
        </Styled.LanguageOptionContainer>
    )
}