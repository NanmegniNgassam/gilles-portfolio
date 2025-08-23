import adobeXD from '../assets/images/adobe-xd.svg';
import angular from '../assets/images/angular.svg';
import appWrite from '../assets/images/appWrite.png';
import azure from '../assets/images/azure-devops.svg';
import css from '../assets/images/css.svg';
import django from '../assets/images/django.svg';
import docker from '../assets/images/docker.svg';
import figma from '../assets/images/figma.svg';
import firebase from '../assets/images/firebase.svg';
import gcp from '../assets/images/gcp.png';
import git from '../assets/images/git.svg';
import gitHub from '../assets/images/github.png';
import gitLab from '../assets/images/gitlab.svg';
import html from '../assets/images/html.svg';
import javaScript from '../assets/images/javascript.svg';
import jest from '../assets/images/jest.svg';
import karma from '../assets/images/karma.png';
import mongo from '../assets/images/mongodb.svg';
import mui from '../assets/images/mui.svg';
import sql from '../assets/images/mysql.svg';
import nextJs from '../assets/images/next.svg';
import nodeJs from '../assets/images/nodejs.svg';
import oidc from '../assets/images/oidc.png';
import python from '../assets/images/python.svg';
import react from '../assets/images/react.svg';
import redis from '../assets/images/redis.svg';
import redux from '../assets/images/redux.svg';
import sass from '../assets/images/sass.svg';
import sqlite from '../assets/images/sqllite.svg';
import testingLibrary from '../assets/images/testingLibrary.png';
import typeScript from '../assets/images/typescript.svg';
import vue from '../assets/images/vue.svg';
import nestJs from '../assets/images/nestJs.png';
import fastAPI from '../assets/images/fast_api.png';
import tailwindCss from '../assets/images/tailwindCss.png';
import mocha from '../assets/images/mocha.png';
import cypress from '../assets/images/cypress.png';
import playwright from '../assets/images/playwright.png';
import kubernetes from '../assets/images/Kubernetes.png';


interface Language {
    name: string;
    imageUrl: string;
    siteUrl: string;
}

interface Technology {
    name: string;
    languages: Language[];
}

export const technos: Technology[] = [
    {
        name: 'languages',
        languages: [
            {
                name: 'JavaScript',
                imageUrl: javaScript,
                siteUrl: 'https://www.javascript.com/'
            },
            {
                name: 'TypeScript',
                imageUrl: typeScript,
                siteUrl: 'https://www.typescriptlang.org/'
            },
            {
                name: 'Node Js',
                imageUrl: nodeJs,
                siteUrl: 'https://nodejs.org/',
            },
            {
                name: 'Python',
                imageUrl: python,
                siteUrl: 'https://www.python.org/'
            }
        ]
    },
    {
        name: 'frameworks',
        languages: [
            {
                name: 'React',
                imageUrl: react,
                siteUrl: 'https://react.dev/'
            },
            {
                name: 'Angular',
                imageUrl: angular,
                siteUrl: 'https://v2.angular.io/'
            },
            {
                name: 'NextJs',
                imageUrl: nextJs,
                siteUrl: 'https://nextjs.org/'
            },
            {
                name: 'Vue',
                imageUrl: vue,
                siteUrl: 'https://vuejs.org/'
            },
            {
                name: 'NestJs',
                imageUrl: nestJs,
                siteUrl: 'https://nestjs.com/'
            },
            {
                name: 'Redux',
                imageUrl: redux,
                siteUrl: 'https://redux.js.org/'
            },
            {
                name: 'Django',
                imageUrl: django,
                siteUrl: 'https://www.djangoproject.com/'
            },
            {
                name: 'Fast Api',
                imageUrl: fastAPI,
                siteUrl: 'https://fastapi.tiangolo.com/'
            },
            {
                name: 'TailwindCss',
                imageUrl: tailwindCss,
                siteUrl: 'https://tailwindcss.com/'
            },
            {
                name: 'Material UI',
                imageUrl: mui,
                siteUrl: 'https://mui.com/'
            },
        ]
    },
    {
        name: 'services',
        languages: [
            {
                name: 'Firebase',
                imageUrl: firebase,
                siteUrl: 'https://firebase.google.com/'
            },
            {
                name: 'AppWrite',
                imageUrl: appWrite,
                siteUrl: 'https://appwrite.io/'
            },
            {
                name: 'MongoDB Atlas',
                imageUrl: mongo,
                siteUrl: 'https://www.mongodb.com/'
            },
            {
                name: 'Google Cloud Platform',
                imageUrl: gcp,
                siteUrl: 'https://www.cloudskillsboost.google/'
            },
            {
                name: 'OIDC',
                imageUrl: oidc,
                siteUrl: 'https://openid.net/'
            }
        ]
    },
    {
        name: 'databases',
        languages: [
            {
                name: 'SQL',
                imageUrl: sql,
                siteUrl: 'https://www.mysql.com/'
            },
            {
                name: 'SQLite',
                imageUrl: sqlite,
                siteUrl: 'https://www.sqlite.org/'
            },
            {
                name: 'NoSQL',
                imageUrl: mongo,
                siteUrl: 'https://www.mongodb.com/resources/basics/databases/nosql-explained'
            },
            {
                name: 'Redis',
                imageUrl: redis,
                siteUrl: 'https://redis.io/'
            }
        ]
    },
    {
        name: 'conception',
        languages: [
            {
                name: 'Adobe XD',
                imageUrl: adobeXD,
                siteUrl: 'https://helpx.adobe.com/fr/support/xd.html'
            },
            {
                name: 'Figma',
                imageUrl: figma,
                siteUrl: 'https://www.figma.com/'
            }
        ]
    },
    {
        name: 'integration',
        languages: [
            {
                name: 'Git',
                imageUrl: git,
                siteUrl: 'https://git-scm.com/'
            },
            {
                name: 'GitHub',
                imageUrl: gitHub,
                siteUrl: 'https://github.com/'
            },
            {
                name: 'GitLab',
                imageUrl: gitLab,
                siteUrl: 'https://about.gitlab.com/'
            },
            {
                name: 'Azure',
                imageUrl: azure,
                siteUrl: 'https://azure.microsoft.com/'
            },
            {
                name: 'Docker',
                imageUrl: docker,
                siteUrl: 'https://www.docker.com/'
            },
            {
                name: 'Kubernetes',
                imageUrl: kubernetes,
                siteUrl: 'https://kubernetes.io/'
            },
        ]
    },
    {
        name: 'others',
        languages: [
            {
                name: 'Jest',
                imageUrl: jest,
                siteUrl: 'https://jestjs.io/'
            },
            {
                name: 'Testing Library',
                imageUrl: testingLibrary,
                siteUrl: 'https://testing-library.com/'
            },
            {
                name: 'Cypress',
                imageUrl: cypress,
                siteUrl: 'https://testing-library.com/'
            },
            {
                name: 'Playwright',
                imageUrl: playwright,
                siteUrl: 'https://testing-library.com/'
            },
            {
                name: 'Karma',
                imageUrl: karma,
                siteUrl: 'https://karma-runner.github.io/latest/index.html'
            },
            {
                name: 'Mocha',
                imageUrl: mocha,
                siteUrl: 'https://mochajs.org/'
            },
            {
                name: 'HTML',
                imageUrl: html,
                siteUrl: 'https://html.com/'
            },
            {
                name: 'Css',
                imageUrl: css,
                siteUrl: 'https://www.w3.org/Style/CSS/Overview.en.html'
            },
            {
                name: 'Sass',
                imageUrl: sass,
                siteUrl: 'https://sass-lang.com/'
            },
        ]
    },
]