import i18n  from "i18next";
import { initReactI18next } from "react-i18next";
import PT from './locales/pt/pt-br.json';
import EN from './locales/en/en-us.json';
import ES from './locales/es/es-es.json';
import IT from './locales/it/it-it.json';
import FR from './locales/fr/fr-fr.json';
import DE from './locales/de/de-de.json';


// let translate: i18n;

export const resources = {
    'pt-br': PT,
    'en-en': EN,
    'es-es': ES,
    'it-it': IT,
    'fr-fr': FR,
    'de-de': DE
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            
        }
    })



export default i18n;