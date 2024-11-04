import frFlagSvg from '../assets/images/fr.svg';
import gbFlagSvg from '../assets/images/gb.svg';

export enum AvailableLanguageCodes {
    FRENCH = "fr",
    ENGLISH = "en"
}

interface Language {
    name: string,
    code: AvailableLanguageCodes,
    flagSrc: string,
}

export const availableLanguages: Language[] = [
    {
        name: 'Français',
        code: AvailableLanguageCodes.FRENCH,
        flagSrc: frFlagSvg,
    },
    {
        name: 'English',
        code: AvailableLanguageCodes.ENGLISH,
        flagSrc: gbFlagSvg
    }
];

export const CURRENT_APP_LANG_LOCALSTORAGE_KEY = 'CURRENT_APP_LANG';