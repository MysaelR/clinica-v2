import i18n  from "i18next";
import { initReactI18next } from "react-i18next";

import DE from './locales/de/de-de.json';
import EN from './locales/en/en-us.json';
import ES from './locales/es/es-es.json';
import FR from './locales/fr/fr-fr.json';
import IT from './locales/it/it-it.json';
import PT from './locales/pt/pt-br.json';

// let translate: i18n;

export const resources = {
    'pt-BR': PT,
    'en': EN,
    'es': ES,
    'it': IT,
    'fr': FR,
    'de': DE
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            escapeValue: false
        }
    })



export default i18n;