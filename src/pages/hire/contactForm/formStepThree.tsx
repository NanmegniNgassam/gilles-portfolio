import { Box, Button, TextField } from "@mui/material";
import styles from "./contactForm.module.css"
import { SKILLS } from "../../../utils/skills";
import { useTranslation } from "react-i18next";

interface ContactStepThreeType {
    projectTitle: string,
    setProjectTitle: (value: string) => void
    projectMessage: string,
    setProjectMessage: (value: string) => void
    handleBack: () => void;
    submitProposition: () => void;
    skills: Set<SKILLS>;
}

const ContactStepThree = (props: ContactStepThreeType) => {
    const {t} = useTranslation("global");
    const {projectTitle, setProjectTitle, projectMessage, setProjectMessage, handleBack, submitProposition, skills} = props;

    return (
        <>
            <h3 className={styles.title}> { t("pages.hire.contactForm.steps.third") } </h3>
            <span className={styles.tips}> { t("pages.hire.contactForm.stepDescriptions.third") } </span>
            <Box sx={{ mt:2,}}>
                <TextField 
                    label={t("pages.hire.contactForm.labels.projectTitle")}
                    id="mission-title"
                    value={projectTitle}
                    onChange={(event) => setProjectTitle(event.currentTarget.value)}
                    size="small"
                    fullWidth
                    sx={{ mb:2 }}
                    required
                />
                <TextField 
                    label={t("pages.hire.contactForm.labels.projectDescription")}
                    id="mission-description"
                    value={projectMessage}
                    onChange={(event) => setProjectMessage(event.currentTarget.value)}
                    size="small"
                    fullWidth
                    multiline
                    maxRows={1}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    className="removeButtonOutline"
                >
                    {t("pages.hire.contactForm.previousStep")}
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button 
                    onClick={() => {submitProposition()}} 
                    className="removeButtonOutline"
                    disabled={projectTitle.length < 10 || ([...skills].length === 0)}
                    variant="contained"
                >
                    {t("pages.hire.contactForm.submitProject")}
                </Button>
            </Box>
        </>
    );
}
 
export default ContactStepThree;