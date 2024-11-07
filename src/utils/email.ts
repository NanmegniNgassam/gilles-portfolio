import { MissionProposition } from "./mission";
import { getListingFromList, SKILLS } from "./skills";

export const emailFormat = (proposition: MissionProposition, skills: SKILLS[]):string => {
    const Skills = ["développement mobile", "développement web", "Conception UX", "Outils d'IA"];
    const skillList = skills.map((skill) => {
        return Skills[skill];
    });

    const {mission, recruiter} = proposition;
    const headerSection = `
        Bonjour Gilles NGASSAM,
        <br/><br/><br/>
        Je me permets de vous contacter afin de vous proposer une mission correspondant à votre profil. Nous recherchons actuellement un intervenant pour un projet intitulé ${ mission.title }.
    `;

    const descriptionSection = mission.description ? `
        Le projet consiste principalement en ${ mission.description.toLowerCase()}.
    ` : '';

    const skillsSection = `
        <br/><br/>
        Pour cette mission, les compétences essentielles sont : 
        <strong>
            ${ getListingFromList(skillList) }.
        </strong>
        <br/><br/><br/>
    `;

    const footerSection = `
        Cordialement,<br />
        ${recruiter.firstName} ${recruiter.familyName} <br />
        ${recruiter.company} ${recruiter.company ? '<br/>': ''}
        ${recruiter.email} ${recruiter.email ? '<br/>': ''}
        ${recruiter.phone} ${recruiter.phone ? '<br/>': ''}
    `;


    return headerSection + descriptionSection +  skillsSection +  footerSection;
}