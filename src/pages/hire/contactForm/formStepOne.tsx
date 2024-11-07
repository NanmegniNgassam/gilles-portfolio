import { Box, Button, Stack, TextField } from "@mui/material"
import styles from "./contactForm.module.css"
import { useTranslation } from "react-i18next"

interface ContactStepOneType {
    firstName: string,
    setFirstName: (value: string) => void
    familyName: string,
    setFamilyName: (value: string) => void
    companyName: string,
    setCompanyName: (value: string) => void
    handleBack: () => void;
    handleNext: () => void;
}

const ContactStepOne = (props : ContactStepOneType) => {
    const {t} = useTranslation("global");
    const {firstName, setFirstName, familyName, setFamilyName, companyName, setCompanyName, handleBack, handleNext} = props;
    
    return (  
        <>
            <h3 className={styles.title}>
                {t("pages.hire.contactForm.steps.first")}
            </h3>
            <span className={styles.tips}>
                {t("pages.hire.contactForm.stepDescriptions.first")}
            </span>
            <Box sx={{ mt:2 }}>
                <Stack direction="row" gap={2} sx={{ mt:1, mb: 2 }}>
                    <TextField
                        label={t("pages.hire.contactForm.labels.firstName")}
                        id="recruiter-first-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.currentTarget.value)}
                        size="small"
                        required
                    />
                    <TextField
                        label={t("pages.hire.contactForm.labels.familyName")}
                        id="recruiter-family-name"
                        value={familyName}
                        onChange={(event) => setFamilyName(event.currentTarget.value)}
                        size="small"
                    />
                </Stack>
                <TextField 
                    label={t("pages.hire.contactForm.labels.company")}
                    id="recruiter-company"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.currentTarget.value)}
                    size="small"
                    fullWidth
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    onClick={handleBack}
                    disabled
                    sx={{ mr: 1 }}
                    className="removeButtonOutline"
                >
                    {t("pages.hire.contactForm.previousStep")}
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button 
                    onClick={handleNext} 
                    className="removeButtonOutline" 
                    disabled={(!firstName || firstName?.length < 3)}
                >
                    {t("pages.hire.contactForm.nextStep")}
                </Button>
            </Box>
        </>
    );
}
 
export default ContactStepOne;