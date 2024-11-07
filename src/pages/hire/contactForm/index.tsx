import { Box, Button, Container, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./contactForm.module.css";
import { ContactFormType } from "./ContactForm.types";
import ContactStepOne from "./formStepOne";
import ContactStepThree from "./formStepThree";
import ContactStepTwo from "./formStepTwo";
import ConfirmDialog from "./confirmDialog";
import { MissionProposition } from "../../../utils/mission";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTranslation } from "react-i18next";


const ContactForm = ({ skills, setDefaultSkills }: ContactFormType) => {
    const {t} = useTranslation("global");
    const steps = [
        t("pages.hire.contactForm.steps.first"), 
        t("pages.hire.contactForm.steps.second"),
        t("pages.hire.contactForm.steps.third"),
    ];

    const [activeStep, setActiveStep] = useState<number>(0);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    
    const [firstName, setFirstName] = useState<string>("");
    const [familyName, setFamilyName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [recruiterEmail, setRecruiterEmail] = useState<string>("");
    const [recruiterPhone, setRecruiterPhone] = useState<string>("");
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectMessage, setProjectMessage] = useState<string>("");
    const [proposition, setProposition] = useState<MissionProposition>({
        recruiter: {
            firstName, familyName, 
            company: companyName, 
            email: recruiterEmail, 
            phone: recruiterPhone
        },
        mission: {
            title: projectTitle,
            description: projectMessage,
        }
    });

    /**
     * Summarize in order to send the proposition
     */
    const submitProposition = () => {
        // Update the current proposition
        setProposition({
            recruiter: {
                firstName, familyName, 
                company: companyName, 
                email: recruiterEmail, 
                phone: recruiterPhone
            },
            mission: {
                title: projectTitle,
                description: projectMessage,
            }
        })

        setDialogOpen(true);
    }

    /**
     * Go to the process next step
     */
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        // Update the current proposition
        setProposition({
            recruiter: {
                firstName, familyName, 
                company: companyName, 
                email: recruiterEmail, 
                phone: recruiterPhone
            },
            mission: {
                title: projectTitle,
                description: projectMessage,
            }
        })
    };

    /**
     * Go to the process previous step
     */
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    /**
     * 
     */
    const resetProposition = () => {
        setProjectTitle("");
        setProjectMessage("");
        setDefaultSkills();
        setActiveStep(0);
    }
    
    return (
        <Box sx={{ width: '100%', mt: 2 }} className={styles.contactContainer}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {

                    return (
                        <Step key={index}>
                            <StepLabel>
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length && (
                <Container sx={{ mt: 3 }}>
                    <Stack sx={{ alignItems: "center" }}>
                        <DoneAllIcon color="success" fontSize="large" />
                        <Typography textAlign="center">
                            { t("pages.hire.contactForm.successMessage") }
                        </Typography>
                    </Stack>
                    <Button 
                        variant="outlined" 
                        className="removeButtonOutline"
                        onClick={resetProposition}
                        sx={{  display: "block", margin: "20px auto" }}
                    >
                        { t("pages.hire.contactForm.submitAnotherProject") }
                    </Button>
                </Container>
            )}
            {
                activeStep === 0 && (
                    <ContactStepOne 
                        firstName={firstName}
                        setFirstName={setFirstName}
                        familyName={familyName}
                        setFamilyName={setFamilyName}
                        companyName={companyName}
                        setCompanyName={setCompanyName}
                        handleBack={handleBack}
                        handleNext={handleNext}
                    />
                )
            }
            {
                activeStep === 1 && (
                    <ContactStepTwo
                        recruiterEmail={recruiterEmail}
                        setRecruiterEmail={setRecruiterEmail}
                        recruiterPhone={recruiterPhone}
                        setRecruiterPhone={setRecruiterPhone}
                        handleBack={handleBack}
                        handleNext={handleNext}
                    />
                )
            }
            {
                activeStep === 2 && (
                    <ContactStepThree 
                        projectTitle={projectTitle}
                        setProjectTitle={setProjectTitle}
                        projectMessage={projectMessage}
                        setProjectMessage={setProjectMessage}
                        skills={skills}
                        handleBack={handleBack}
                        submitProposition={submitProposition}
                    />
                )
            }
            {isDialogOpen && (
                <ConfirmDialog 
                    isDialogOpen={isDialogOpen}
                    setDialogOpen={setDialogOpen}
                    handleNext={handleNext}
                    proposition={proposition}
                    skills={[...skills]}
                />
            )}
        </Box>
    );
}
 
export default ContactForm;
