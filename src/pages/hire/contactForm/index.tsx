import { Box, Button, Container, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import styles from "./contactForm.module.css";
import { ContactFormType } from "./ContactForm.types";
import ContactStepOne from "./formStepOne";
import ContactStepThree from "./formStepThree";
import ContactStepTwo from "./formStepTwo";
import ConfirmDialog from "./confirmDialog";
import { MissionProposition } from "../../../utils/mission";

const steps = ['Introducing', 'Contacts', 'Message'];

const ContactForm = ({ skills }: ContactFormType) => {
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
    })

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

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
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
                <Container>
                    <div>Message de réussite</div>
                    <Button 
                        variant="outlined" 
                        className="removeButtonOutline"
                        onClick={() => {
                            setProjectTitle("");
                            setProjectMessage("");
                            // TODO: Remettre les compétences par défaut.
                            setActiveStep(0);
                        }}
                        
                    >
                        Soumettre un autre projet
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
                        submitProposition={() => setDialogOpen(true)}
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
