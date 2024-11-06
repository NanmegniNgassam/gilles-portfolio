import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { availableSkills } from "../../../utils/skills";
import styles from "./contactForm.module.css";
import { ContactFormType } from "./ContactForm.types";
import ContactStepOne from "./formSteps";

const steps = ['Introducing', 'Contacts', 'Message'];
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ContactForm = ({ skills }: ContactFormType) => {
    const {t} = useTranslation("global");
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    
    const [firstName, setFirstName] = useState<string>("");
    const [familyName, setFamilyName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [recruiterEmail, setRecruiterEmail] = useState<string>("");
    const [recruiterPhone, setRecruiterPhone] = useState<string>("");
    const [projectTitle, setProjectTitle] = useState<string>("");
    const [projectMessage, setProjectMessage] = useState<string>("");

    const EMAIL_FONT_SIZE = { laptop: 18, tablet: 16, mobile: 14 };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleClose = (_: Event, reason: "escapeKeyDown" | "backdropClick") => {
        if(reason === "backdropClick")
            return;

        setDialogOpen(false);
    }

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            children: React.ReactElement<unknown, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    
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
                    <React.Fragment>
                        <h3 className={styles.title}>Contacts</h3>
                        <span className={styles.tips}>Ajoutez au moins un de vos contacts.</span>
                        <Box sx={{ mt:2 }}>
                            <TextField 
                                label="Adresse e-mail"
                                id="recruiter-email"
                                value={recruiterEmail}
                                onChange={(event) => setRecruiterEmail(event.currentTarget.value)}
                                size="small"
                                fullWidth
                                sx={{ mb:2 }}
                                type="email"
                                required
                            />
                            <MuiTelInput 
                                label="Numéro de téléphone"
                                id="recruiter-email" 
                                defaultCountry="FR"
                                value={recruiterPhone} 
                                onChange={setRecruiterPhone}
                                size="small"
                                fullWidth
                                required
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
                                onClick={handleNext} 
                                className="removeButtonOutline"
                                disabled={!recruiterEmail.match(EMAIL_REGEX) && recruiterPhone.length < 7}
                            >
                                Next
                            </Button>
                        </Box>
                    </React.Fragment>
                )
            }
            {
                activeStep === 2 && (
                    <React.Fragment>
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
                                maxRows={4}
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
                                onClick={() => {setDialogOpen(true)}} 
                                className="removeButtonOutline"
                                disabled={projectTitle.length < 10 || ([...skills].length === 0)}
                                variant="contained"
                            >
                                Soumettre
                            </Button>
                        </Box>
                    </React.Fragment>
                )
            }
            {isDialogOpen && (
                <Dialog
                    open={isDialogOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    maxWidth="laptop"
                >
                    <DialogTitle variant="h5" color="secondary" sx={{ textAlign: "center", fontWeight: 500, textTransform: "uppercase", mb: 2, mt: 2 }}>
                        Récapitulatif de la proposition de mission
                    </DialogTitle>
                    <>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <Typography fontSize={EMAIL_FONT_SIZE} >Bonjour Gilles NGASSAM,</Typography>
                                <br />
                                <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                                    Je me permets de vous contacter <strong> { companyName && ( "de la part de " + companyName ) }</strong>  pour vous proposer une mission correspondant à votre profil. 
                                    Nous recherchons actuellement un intervenant pour un projet intitulé <strong>{ projectTitle }</strong>.
                                    { projectMessage && ( <>Le projet consiste principalement en { projectMessage.toLowerCase() }</>)}
                                </Typography>
                                <Typography fontSize={EMAIL_FONT_SIZE} sx={{ textIndent: 40, textAlign: "justify" }}>
                                    Pour cette mission, les compétences essentielles sont : 
                                    <strong>
                                        {[...skills].map((skill, index) => {
                                            const fullSkill = availableSkills.find((availableSkill) => availableSkill.code == skill); 
                                            if(!fullSkill) 
                                                return "";

                                            if(index === 0) {
                                                return (` ${t("general.domains." + fullSkill.label).toLowerCase()}`)
                                            } else if(index === ([...skills].length - 1)) {
                                                return (` et ${t("general.domains." + fullSkill.label).toLowerCase()}`)
                                            } else {
                                                return (` ${t("general.domains." + fullSkill.label).toLowerCase()},`)
                                            }

                                        })}
                                    .
                                    </strong>
                                </Typography>
                                <br />
                                <Typography fontSize={EMAIL_FONT_SIZE}>Cordialement,</Typography>
                                <Typography fontSize={EMAIL_FONT_SIZE}>{firstName} {familyName}</Typography>
                                <Typography fontSize={EMAIL_FONT_SIZE}>{ companyName }</Typography>
                                <Typography fontSize={EMAIL_FONT_SIZE}>{ recruiterEmail }</Typography>
                                <Typography fontSize={EMAIL_FONT_SIZE}>{ recruiterPhone }</Typography>
                            </DialogContentText>
                        </DialogContent>
                    </>
                    <DialogActions>
                        <Button 
                            className="removeButtonOutline" 
                            onClick={() => setDialogOpen(false)}
                            variant="outlined"
                            color="secondary"
                        >
                            Annuler
                        </Button>
                        <Button 
                            className="removeButtonOutline" 
                            onClick={() => {handleNext(); setDialogOpen(false);}}
                            variant="contained"
                            color="secondary"
                        >
                            Envoyer
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Box>
    );
}
 
export default ContactForm;
