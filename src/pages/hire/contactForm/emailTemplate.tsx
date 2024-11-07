import { DialogContent, DialogContentText, Typography } from "@mui/material";
import { MissionProposition } from "../../../utils/mission";
import { availableSkills, getListingFromList, SKILLS } from "../../../utils/skills";
import { useTranslation } from "react-i18next";

const EmailTemplate = (props: {proposition : MissionProposition & { skills: SKILLS[] }}  ) => {
    const EMAIL_FONT_SIZE = { laptop: 18, tablet: 16, mobile: 14 };
    const {mission, recruiter, skills} = props.proposition;
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
                <DialogContentText component="div" id="alert-dialog-slide-description">
                    <Typography fontSize={EMAIL_FONT_SIZE} >
                        { t("pages.home.heroSection.morningGreeting") } Gilles NGASSAM,
                    </Typography>
                    <br />
                    <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                        {t("pages.hire.contactForm.email.emailHeader")} <strong>{ mission.title.toLowerCase() }</strong>.
                        { mission.description && ( 
                            <>{t("pages.hire.contactForm.email.projectDescriptionAnnouncer")} { mission.description.toLowerCase() }.</>
                        )}
                    </Typography>
                    <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                        {t("pages.hire.contactForm.email.skillsAnnouncer")} 
                        <strong>
                            { getListingFromList(skillList) }.
                        </strong>
                    </Typography>
                    <br />
                    <Typography fontSize={EMAIL_FONT_SIZE}> {t("pages.hire.contactForm.email.goodByeFormulation")}, </Typography>
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

export default EmailTemplate;