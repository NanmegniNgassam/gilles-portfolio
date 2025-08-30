import respo from "../assets/images/respo.jpg";
import junior from "../assets/images/junior.png";
import pause_brindilles from "../assets/images/pause_brindille.jpeg"
import festival_brindilles from "../assets/images/festival_brindilles.jpg";
import junior_association from "../assets/images/junior.jpg";
import afev_logo from "../assets/images/afev_logo.jpeg";
import afev from "../assets/images/afev.jpg";

export interface SocialExperience {
    title: string;
    coverImage: string;
    associationImage: string;
    start: Date;
    end?: Date;
    duration: number;
    durationUnit: Intl.RelativeTimeFormatUnit;
    location: string;
    description: string;
    link: string;
    isProgressing: boolean;
}

export const volunteeringExperiences: SocialExperience[] = [
    {
        title: "headAtJunior",
        description: "headAtJunior",
        coverImage: respo,
        associationImage: junior,
        start: new Date("9/2/2024"),
        end: new Date("2/28/2025"),
        duration: 6,
        durationUnit: "months",
        location: "Belfort, Bourgogne-Franche-Comté, France",
        isProgressing: false,
        link: "https://junior.utbm.fr/"
    },
    {
        title: "brindilles",
        description: "brindilles",
        coverImage: festival_brindilles,
        associationImage: pause_brindilles,
        start: new Date("7/5/2024"),
        end: new Date("7/7/2024"),
        duration: 3,
        durationUnit: "days",
        location: "38 All. Jean-Paul II, 69110 Sainte-Foy-lès-Lyon",
        isProgressing: false,
        link: "https://lapausebrindille.org/tribubrindillefestival/"
    },
    {
        title: "workerAtJunior",
        description: "workerAtJunior",
        coverImage: junior_association,
        associationImage: junior,
        start: new Date("2/10/2024"),
        end: new Date("8/30/2024"),
        duration: 7,
        durationUnit: "months",
        location: "Belfort, Bourgogne-Franche-Comté, France",
        isProgressing: false,
        link: "https://junior.utbm.fr/"
    },
    {
        title: "afev",
        description: "afev",
        coverImage: afev,
        associationImage: afev_logo,
        start: new Date("10/1/2022"),
        end: new Date("6/30/2023"),
        duration: 9,
        durationUnit: "months",
        location: "Belfort, Bourgogne-Franche-Comté, France",
        isProgressing: false,
        link: "https://afev.org/bourgogne-franche-comte/pays-montbeliard"
    },
];