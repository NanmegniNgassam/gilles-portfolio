import terroir_logo from "../assets/images/bio-gusta.jpg";
import cert_landing from "../assets/images/cert_landing.png";
import certification_logo from "../assets/images/certification.png";
import crous_logo from "../assets/images/crous.png";
import ekilog from "../assets/images/ekilog.png";
import elviatech from "../assets/images/elviatech.png";
import google from "../assets/images/Google.png";
import portfolio_logo from "../assets/images/logo.png";
import mercato from "../assets/images/mercato.png";
import movieAdvisor from "../assets/images/movieAdvisor.png";
import nextEngineering from "../assets/images/nextengineering.jpeg";
import otaku_logo from "../assets/images/otaku.png";
import otaku_landing from "../assets/images/otaku_landing.png";
import portfolio from "../assets/images/portfolio.png";
import terroir from "../assets/images/terroir.png";
import terroir_back from "../assets/images/terroir_back.png";
import ubuntu from "../assets/images/ubuntu.png";
import ubuntu_logo from "../assets/images/ubuntu_logo.png";
import utbm_logo from "../assets/images/utbm.svg";


import adobeXD from '../assets/images/adobe-xd.svg';
import angular from '../assets/images/angular.svg';
import appWrite from '../assets/images/appWrite.png';
import azure from '../assets/images/azure-devops.svg';
import css from '../assets/images/css.svg';
import django from '../assets/images/django.svg';
import docker from "../assets/images/docker.svg";
import figma from '../assets/images/figma.svg';
import firebase from '../assets/images/firebase.svg';
import flutter from "../assets/images/flutter.svg";
import gcp from "../assets/images/gcp.png";
import git from '../assets/images/git.svg';
import html from '../assets/images/html.svg';
import java from "../assets/images/java.svg";
import javaScript from '../assets/images/javascript.svg';
import jest from '../assets/images/jest.svg';
import mongo from '../assets/images/mongodb.svg';
import mui from '../assets/images/mui.svg';
import sql from '../assets/images/mysql.svg';
import nextJs from '../assets/images/next.svg';
import nodeJs from '../assets/images/nodejs.svg';
import php from '../assets/images/php.svg';
import python from '../assets/images/python.svg';
import react from '../assets/images/react.svg';
import redis from '../assets/images/redis.svg';
import redux from '../assets/images/redux.svg';
import sass from '../assets/images/sass.svg';
import sharePoint from "../assets/images/SharePoint.svg";
import spfx from "../assets/images/spfx.jpg";
import sqlite from '../assets/images/sqllite.svg';
import testingLibrary from '../assets/images/testingLibrary.png';
import typeScript from '../assets/images/typescript.svg';
import vue from '../assets/images/vue.svg';

export interface Project {
    id: number;
    title: string;
    coverImage?: string;
    associationImage: string;
    start: Date;
    end?: Date;
    duration: number;
    durationUnit: Intl.RelativeTimeFormatUnit;
    description: string;
    code?: string;
    link?: string;
    isProgressing: boolean;
    tools: {name: string, imageUrl: string}[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "portfolio",
        description: "portfolio",
        coverImage: portfolio,
        associationImage: portfolio_logo,
        start: new Date("11/1/2024"),
        end: new Date("11/11/2024"),
        duration: 10,
        durationUnit: "days",
        isProgressing: false,
        code: "https://github.com/NanmegniNgassam/gilles-portfolio",
        link: "https://gilles-ngassam.pisoftlite.com/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'React', imageUrl: react},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Redux', imageUrl: redux},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Git', imageUrl: git},
            {name: 'Jest', imageUrl: jest},
        ]
    },
    {
        id: 2,
        title: "africanTerroir",
        description: "africanTerroir",
        coverImage: terroir,
        associationImage: terroir_logo,
        start: new Date("6/1/2024"),
        end: new Date("6/30/2024"),
        duration: 4,
        durationUnit: "weeks",
        isProgressing: false,
        link: "https://terroir-afrique.com/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'Next Js', imageUrl: nextJs},
            {name: 'Node Js', imageUrl: nodeJs},
            {name: 'Firebase', imageUrl: firebase},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Sass', imageUrl: sass},
            {name: 'Azure Devops', imageUrl: azure},
            {name: 'Redis', imageUrl: redis},
        ]
    },
    {
        id: 3,
        title: "movieGuidApp",
        description: "movieGuidApp",
        coverImage: movieAdvisor,
        associationImage: portfolio_logo,
        start: new Date("12/3/2023"),
        end: new Date("12/10/2023"),
        duration: 7,
        durationUnit: "days",
        isProgressing: true,
        code: "https://github.com/NanmegniNgassam/movie-guid-app",
        link: "https://movie-guid-app.pisoftlite.com/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'React', imageUrl: react},
            {name: 'Appwrite', imageUrl: appWrite},
            {name: 'Html', imageUrl: html},
            {name: 'Scss', imageUrl: sass},
            {name: 'Git', imageUrl: git},
            {name: 'Redis', imageUrl: redis},
        ]
    },
    {
        id: 4,
        title: "stockManagement",
        description: "stockManagement",
        coverImage: terroir_back,
        associationImage: terroir_logo,
        start: new Date("7/1/2024"),
        end: new Date("8/31/2024"),
        duration: 2,
        durationUnit: "months",
        isProgressing: false,
        link: "https://terroir-afrique.com/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'Vue Js', imageUrl: vue},
            {name: 'Node Js', imageUrl: nodeJs},
            {name: 'Firebase', imageUrl: firebase},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Sass', imageUrl: sass},
            {name: 'Azure Devops', imageUrl: azure},
            {name: 'Redis', imageUrl: redis},
        ]
    },
    {
        id: 5,
        title: "ubuntu",
        description: "ubuntu",
        coverImage: ubuntu,
        associationImage: ubuntu_logo,
        start: new Date("7/1/2022"),
        end: new Date("7/31/2022"),
        duration: 4,
        durationUnit: "weeks",
        isProgressing: false,
        code: "https://github.com/NanmegniNgassam/Ubuntu_2k22",
        tools: [
            {name: 'Php', imageUrl: php},
            {name: 'JavaScript', imageUrl: javaScript},
            {name: 'Sql', imageUrl: sql},
            {name: 'HTML', imageUrl: html},
            {name: 'Sass', imageUrl: sass},
            {name: 'Adobe XD', imageUrl: adobeXD},
        ]
    },
    {
        id: 6,
        title: "otakuApp",
        description: "otakuApp",
        coverImage: otaku_landing,
        associationImage: otaku_logo,
        start: new Date("8/1/2024"),
        end: new Date("12/31/2024"),
        duration: 6,
        durationUnit: "months",
        isProgressing: true,
        code: "https://github.com/NanmegniNgassam/otaku",
        link: "https://otaku.pisoftlite.com/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'Angular', imageUrl: angular},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Firebase', imageUrl: firebase},
            {name: 'Mongo DB', imageUrl: mongo},
            {name: 'Figma', imageUrl: figma},
            {name: 'Git', imageUrl: git},
            {name: 'Testing Library', imageUrl: testingLibrary}
        ]
    },
    {
        id: 7,
        title: "privateNight",
        description: "privateNight",
        coverImage: cert_landing,
        associationImage: certification_logo,
        start: new Date("4/13/2023"),
        end: new Date("6/18/2023"),
        duration: 4,
        durationUnit: "months",
        isProgressing: false,
        code: "https://github.com/NanmegniNgassam/Authentification_Certificate",
        tools: [
            {name: 'Python', imageUrl: python},
            {name: 'Django', imageUrl: django},
            {name: 'Sql', imageUrl: sql},
            {name: 'JavaScript', imageUrl: javaScript},
            {name: 'Html', imageUrl: html},
            {name: 'Css', imageUrl: css},
            {name: 'Git', imageUrl: git},
        ]
    },
    {
        id: 8,
        title: "jsWindowTransfert",
        description: "jsWindowTransfert",
        coverImage: mercato,
        associationImage: portfolio_logo,
        start: new Date("7/7/2023"),
        end: new Date("7/12/2023"),
        duration: 12,
        durationUnit: "days",
        isProgressing: true,
        code: "https://github.com/NanmegniNgassam/foot-trader",
        tools: [
            {name: 'JavaScript', imageUrl: javaScript},
            {name: 'React', imageUrl: react},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Git', imageUrl: git},
            {name: 'SQLite', imageUrl: sqlite},
        ]
    },
]

export const academics: Project[] = [
    {
        id: 1,
        title: "A24",
        description: "A24",
        associationImage: utbm_logo,
        start: new Date("9/9/2024"),
        duration: 5,
        durationUnit: "months",
        isProgressing: true,
        link: "https://www.utbm.fr/",
        tools: [
            {name: 'Python', imageUrl: python},
            {name: 'Java', imageUrl: java},
            {name: 'Django', imageUrl: django},
            {name: 'Git', imageUrl: git},
        ]
    },
    {
        id: 2,
        title: "P24",
        description: "P24",
        associationImage: utbm_logo,
        start: new Date("3/4/2024"),
        end: new Date("6/22/2024"),
        duration: 4,
        durationUnit: "months",
        isProgressing: false,
        link: "https://www.utbm.fr/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'Angular', imageUrl: angular},
            {name: 'Java', imageUrl: java},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Figma', imageUrl: figma},
            {name: 'Git', imageUrl: git},
            {name: 'Jest', imageUrl: jest},
            {name: 'Google Cloud Platform', imageUrl: gcp},
            {name: 'Docker', imageUrl: docker},
        ]
    },
    {
        id: 3,
        title: "interA23",
        description: "interA23",
        associationImage: nextEngineering,
        start: new Date("3/04/2024"),
        end: new Date("3/08/2024"),
        duration: 5,
        durationUnit: "days",
        isProgressing: false,
        link: "https://neext.engineering/",
        tools: [
            {name: 'Python', imageUrl: python},
            {name: 'Django', imageUrl: django},
        ]
    },
    {
        id: 4,
        title: "A23",
        description: "A23",
        associationImage: ekilog,
        start: new Date("9/4/2023"),
        end: new Date("2/09/2024"),
        duration: 6,
        durationUnit: "months",
        isProgressing: false,
        link: "https://www.ekilog.fr/",
        tools: [
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'React', imageUrl: react},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Redux', imageUrl: redux},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Figma', imageUrl: figma},
            {name: 'Azure Devops', imageUrl: azure},
            {name: 'Jest', imageUrl: jest},
            {name: 'Testing Library', imageUrl: testingLibrary},
            {name: 'SharePoint', imageUrl: sharePoint},
            {name: 'SPFx', imageUrl: spfx},
        ]
    },
    {
        id: 5,
        title: "interA22",
        description: "interA22",
        associationImage: crous_logo,
        start: new Date("3/20/2023"),
        end: new Date("3/24/2023"),
        duration: 5,
        durationUnit: "days",
        isProgressing: false,
        link: "https://www.crous-bfc.fr/",
        tools: [
            {name: 'Java', imageUrl: java},
            {name: 'Python', imageUrl: python},
        ]
    },
    {
        id: 5,
        title: "A3",
        description: "A3",
        associationImage: utbm_logo,
        start: new Date("9/5/2022"),
        end: new Date("6/30/2023"),
        duration: 9,
        durationUnit: "months",
        isProgressing: false,
        link: "https://www.utbm.fr/",
        tools: [
            {name: 'Java', imageUrl: java},
            {name: 'Python', imageUrl: python},
            {name: 'Django', imageUrl: django},
            {name: 'TypeScript', imageUrl: typeScript},
            {name: 'JavaScript', imageUrl: javaScript},
            {name: 'React', imageUrl: react},
            {name: 'Vue', imageUrl: vue},
            {name: 'Angular', imageUrl: angular},
            {name: 'Php', imageUrl: php},
            {name: 'SQlite', imageUrl: sqlite},
            {name: 'SQL', imageUrl: sql},
            {name: 'NoSQL', imageUrl: mongo},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Redux', imageUrl: redux},
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Git', imageUrl: git},
        ]
    },
    {
        id: 6,
        title: "uxCert",
        description: "uxCert",
        associationImage: google,
        start: new Date("9/1/2022"),
        end: new Date("2/15/2023"),
        duration: 6,
        durationUnit: "months",
        isProgressing: false,
        link: "https://coursera.org/share/e59e2c9c5f70958bf1848aa0f62272a5",
        tools: [
            {name: 'Adobe XD', imageUrl: adobeXD},
            {name: 'Figma', imageUrl: figma},
        ]
    },
    {
        id: 7,
        title: "elviatech",
        description: "elviatech",
        associationImage: elviatech,
        start: new Date("8/1/2022"),
        end: new Date("8/12/2022"),
        duration: 10,
        durationUnit: "days",
        isProgressing: false,
        link: "http://www.elviatech.org/Apropos.php",
        tools: [
            {name: 'Python', imageUrl: python},
            {name: 'Flutter', imageUrl: flutter},
            {name: 'Material UI', imageUrl: mui},
            {name: 'Figma', imageUrl: figma},
        ]
    },
    {
        id: 8,
        title: "cpge",
        description: "cpge",
        associationImage: ekilog,
        start: new Date("10/5/2020"),
        end: new Date("6/24/2022"),
        duration: 2,
        durationUnit: "years",
        isProgressing: false,
        link: "http://www.univ-catho-sjd.com/",
        tools: [
            {name: 'JavaScript', imageUrl: javaScript},
            {name: 'Python', imageUrl: python},
            {name: 'Java', imageUrl: java},
            {name: 'MySQL', imageUrl: sql},
            {name: 'HTML', imageUrl: html},
            {name: 'Css', imageUrl: css},
            {name: 'Sass', imageUrl: sass},
        ]
    },

]