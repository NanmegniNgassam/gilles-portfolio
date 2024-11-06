import { DialogContent, DialogContentText, Typography } from "@mui/material";
import { MissionProposition } from "../../../utils/mission";
import { availableSkills, getListingFromList, SKILLS } from "../../../utils/skills";
import { useTranslation } from "react-i18next";

const EmailFormat = (props: MissionProposition & { skills: SKILLS[] }  ) => {
    const EMAIL_FONT_SIZE = { laptop: 18, tablet: 16, mobile: 14 };
    const {mission, recruiter, skills} = props;
    const {t} = useTranslation("global");

    const skillList = skills.map((skill) => {
        const fullSkill = availableSkills.find((availableSkill) => availableSkill.code == skill); 
        if(!fullSkill) 
            return;
        return (` ${t("general.domains." + fullSkill.label).toLowerCase()}`)
    }).filter((label) => label !== undefined)

    return (
        <>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    <Typography fontSize={EMAIL_FONT_SIZE} >Bonjour Gilles NGASSAM,</Typography>
                    <br />
                    <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                        Je me permets de vous contacter 
                        <strong> { recruiter.company && ( "de la part de " + recruiter.company ) } </strong>  
                        pour vous proposer une mission correspondant à votre profil. 
                        Nous recherchons actuellement un intervenant pour un projet intitulé <strong>{ mission.title }</strong>.
                        { mission.description && ( 
                            <>Le projet consiste principalement en { mission.description.toLowerCase() }</>
                        )}
                    </Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                        Pour cette mission, les compétences essentielles sont : 
                        <strong>
                            { getListingFromList(skillList) }.
                        </strong>
                    </Typography>
                    <br />
                    <Typography fontSize={EMAIL_FONT_SIZE}>Cordialement,</Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE}>
                        {recruiter.firstName} {recruiter.familyName}
                    </Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE}>{ recruiter.company }</Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE}>{ recruiter.email }</Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE}>{ recruiter.phone }</Typography>
                </DialogContentText>
            </DialogContent>
        </>
    );
}
 
export default EmailFormat;