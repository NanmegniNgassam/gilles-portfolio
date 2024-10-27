import frFlagSvg from '../assets/images/fr.svg';
import gbFlagSvg from '../assets/images/gb-eng.svg';

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
]