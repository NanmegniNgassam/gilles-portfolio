import adobeXD from '../assets/images/adobe-xd.svg';
import angular from '../assets/images/angular.svg';
import appWrite from '../assets/images/appWrite.png';
import azure from '../assets/images/azure-devops.svg';
import django from '../assets/images/django.svg';
import docker from '../assets/images/docker.svg';
import figma from '../assets/images/figma.svg';
import firebase from '../assets/images/firebase.svg';
import flutter from '../assets/images/flutter.svg';
import gcp from '../assets/images/gcp.png';
import git from '../assets/images/git.svg';
import java from '../assets/images/java.svg';
import javaScript from '../assets/images/javascript.svg';
import mongo from '../assets/images/mongodb.svg';
import mui from '../assets/images/mui.svg';
import sql from '../assets/images/mysql.svg';
import nextJs from '../assets/images/next.svg';
import nodeJs from '../assets/images/nodejs.svg';
import php from '../assets/images/php.svg';
import python from '../assets/images/python.svg';
import react from '../assets/images/react.svg';
import redis from '../assets/images/redis.svg';
import sqlite from '../assets/images/sqllite.svg';
import typeScript from '../assets/images/typescript.svg';
import vue from '../assets/images/vue.svg';
import redux from '../assets/images/redux.svg';
import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import sass from '../assets/images/sass.svg';
import jest from '../assets/images/jest.svg';
import testingLibrary from '../assets/images/testingLibrary.png';
import karma from '../assets/images/karma.png';
// import jasmine from '../assets/images/jasmine.png';
import gitHub from '../assets/images/github.png';
import gitLab from '../assets/images/gitlab.svg';
import oidc from '../assets/images/oidc.png';


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
                name: 'Php',
                imageUrl: php,
                siteUrl: 'https://www.php.net/'
            },
            {
                name: 'Python',
                imageUrl: python,
                siteUrl: 'https://www.python.org/'
            },
            {
                name: 'Java',
                imageUrl: java,
                siteUrl: 'https://www.java.com/'
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
                name: 'Vue',
                imageUrl: vue,
                siteUrl: 'https://vuejs.org/'
            },
            {
                name: 'React native',
                imageUrl: react,
                siteUrl: 'https://reactnative.dev/'
            },
            {
                name: 'Flutter',
                imageUrl: flutter,
                siteUrl: 'https://flutter.dev/'
            },
            {
                name: 'NextJs',
                imageUrl: nextJs,
                siteUrl: 'https://nextjs.org/'
            },
            {
                name: 'Django',
                imageUrl: django,
                siteUrl: 'https://www.djangoproject.com/'
            },
            {
                name: 'Material UI',
                imageUrl: mui,
                siteUrl: 'https://mui.com/'
            },
            {
                name: 'Redux',
                imageUrl: redux,
                siteUrl: 'https://redux.js.org/'
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
                name: 'GitHub',
                imageUrl: gitHub,
                siteUrl: 'https://github.com/'
            },
            {
                name: 'GitLab',
                imageUrl: gitLab,
                siteUrl: 'https://about.gitlab.com/'
            },

        ]
    },
    {
        name: 'others',
        languages: [
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
                name: 'Karma',
                imageUrl: karma,
                siteUrl: 'https://karma-runner.github.io/latest/index.html'
            },
            // {
            //     name: 'Jasmine',
            //     imageUrl: jasmine,
            //     siteUrl: 'https://jasmine.github.io/'
            // },
        ]
    },
]