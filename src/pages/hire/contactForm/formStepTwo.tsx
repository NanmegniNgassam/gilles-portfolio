import { Box, Button, TextField } from "@mui/material";
import styles from "./contactForm.module.css"
import { MuiTelInput } from "mui-tel-input";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

interface ContactStepTwoType {
    recruiterEmail: string,
    setRecruiterEmail: (value: string) => void
    recruiterPhone: string,
    setRecruiterPhone: (value: string) => void
    handleBack: () => void;
    handleNext: () => void;
}

const ContactStepTwo = (props: ContactStepTwoType) => {
    const {recruiterEmail, setRecruiterEmail, recruiterPhone, setRecruiterPhone, handleBack, handleNext} = props;

    return (  
        <>
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
        </>
    );
}
 
export default ContactStepTwo;