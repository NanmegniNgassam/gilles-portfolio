import behance from '../assets/images/behance.png';
import discord from '../assets/images/discord.png';
import github from '../assets/images/github.png';
import gmail from '../assets/images/gmail.png';
import linkedIn from '../assets/images/linkedin.png';

interface SocialItem {
    image: string;
    link: string,
    altDescription: string;
    clickable: boolean;
} 

export const socialsMedia: SocialItem[] = [
    {
        image: linkedIn,
        link: "https://www.linkedin.com/in/nanmegni-ngassam-gilles-pavel-825997206",
        altDescription: "A link to my LinkedIn's account",
        clickable: true
    },
    {
        image: gmail,
        link: "mailto:nanmegningassam@gmail.com",
        altDescription: "Let exchange mails on Gmail",
        clickable: true
    },
    {
        image: discord,
        link: "userID : givels",
        altDescription: "Let chat about your idea on discord",
        clickable: false
    },
    {
        image: github,
        link: "https://github.com/NanmegniNgassam",
        altDescription: "Have a little look at what I'm capable of on my Github's account",
        clickable: true
    },
    {
        image: behance,
        link: "https://www.behance.net/gillesnanmegn",
        altDescription: "Being passionnate about UX, let see my projects showcase",
        clickable: true
    },
]