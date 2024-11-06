import { Box, Button, TextField } from "@mui/material";
import styles from "./contactForm.module.css"
import { SKILLS } from "../../../utils/skills";

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
    const {projectTitle, setProjectTitle, projectMessage, setProjectMessage, handleBack, submitProposition, skills} = props;

    return (
        <>
            <h3 className={styles.title}>Message</h3>
            <span className={styles.tips}>Brève description du projet.</span>
            <Box sx={{ mt:2,}}>
                <TextField 
                    label="Intitulé du projet"
                    id="mission-title"
                    value={projectTitle}
                    onChange={(event) => setProjectTitle(event.currentTarget.value)}
                    size="small"
                    fullWidth
                    sx={{ mb:2 }}
                    required
                />
                <TextField 
                    label="Description du projet"
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
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button 
                    onClick={() => {submitProposition()}} 
                    className="removeButtonOutline"
                    disabled={projectTitle.length < 10 || ([...skills].length === 0)}
                    variant="contained"
                >
                    Soumettre
                </Button>
            </Box>
        </>
    );
}
 
export default ContactStepThree;