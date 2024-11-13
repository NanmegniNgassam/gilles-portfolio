import linkedIn from "../assets/images/linkedin.png";
import gmail from "../assets/images/gmail.png";
import download from "../assets/images/download.png";
import cv from "../assets/data/NANMEGNI_NGASSAM_Gilles_Pavel_CV.pdf";
import github from "../assets/images/github.png";

interface SocialLink {
    title: string;
    url: string;
    imageUrl: string;
}

export const links: SocialLink[] = [
    {
        title: "sendMail",
        url: "mailto:nanmegningassam@gmail.com",
        imageUrl: gmail,
    },
    {
        title: "linkedInProfil",
        url: "https://www.linkedin.com/in/nanmegni-ngassam-gilles-pavel-825997206",
        imageUrl: linkedIn,
    },
    {
        title: "resume",
        url: cv,
        imageUrl: download,
    },
    {
        title: "bitOfCode",
        url: "https://github.com/NanmegniNgassam",
        imageUrl: github,
    },
]