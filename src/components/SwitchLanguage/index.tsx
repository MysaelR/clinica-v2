import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as DE } from './assets/de.svg';
import { ReactComponent as EN } from './assets/en.svg';
import { ReactComponent as ES } from './assets/es.svg';
import { ReactComponent as FR } from './assets/fr.svg';
import { ReactComponent as IT } from './assets/it.svg';
import { ReactComponent as Language } from './assets/languages.svg'
import { ReactComponent as PT } from './assets/pt.svg';
import { LanguageOption } from "./components/LanguageOption";
import * as Styled from './style';

export const SwitchLanguage: React.FC = () => {

    const { t, i18n: {changeLanguage, language} } = useTranslation();

    // const [currentLanguage, setCurrentLanguage] = useState(language);

    const [open, setOpen] = useState<boolean>(false);

    return(
        <Styled.SwitchLanguageContainer
            active={open}
            onClick={() => setOpen(!open)}
        >
            {
                open? <Close/> : <Language/>
                
            }
        <LanguageOption 
            actived={open}
            moveX={47}
            moveY={-10}
            Icon={FR}
            action={() => changeLanguage('fr')}
        />
        <LanguageOption 
            actived={open}
            moveX={-67}
            moveY={-10}
            Icon={EN}
            action={() => changeLanguage('en')}
        />
        <LanguageOption 
            actived={open}
            moveX={-40}
            moveY={-65}
            Icon={PT}
            action={() => changeLanguage('pt-BR')}
        />
        <LanguageOption 
            actived={open}
            moveX={20}
            moveY={-65}
            Icon={IT}
            action={() => changeLanguage('it')}
        />
        <LanguageOption 
            actived={open}
            moveX={-40}
            moveY={45}
            Icon={ES}
            action={() => changeLanguage('es')}
        />
        <LanguageOption 
            actived={open}
            moveX={20}
            moveY={45}
            Icon={DE}
            action={() => changeLanguage('de')}
        />
            

        </Styled.SwitchLanguageContainer>
    )
}