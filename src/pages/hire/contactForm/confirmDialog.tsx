import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle, IconButton, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MissionProposition } from "../../../utils/mission";
import { SKILLS } from "../../../utils/skills";
import EmailTemplate from "./emailTemplate";
import { MailSlurp } from 'mailslurp-client';
import { emailFormat } from "../../../utils/email";

interface ConfirmDialogProps {
    isDialogOpen: boolean;
    setDialogOpen: (val: boolean) => void;
    proposition: MissionProposition;
    handleNext: () => void;
    skills: SKILLS[];
}

const mailslurp = new MailSlurp({ apiKey: "c560fbc51bc041f913acbc01d1ff37165f9afe99ec2078b01ff0cb06b2733f35" });

const ConfirmDialog = (props: ConfirmDialogProps) => {
    const {isDialogOpen, setDialogOpen, proposition, handleNext, skills} = props;
    const [isSending, setSending] = useState<boolean>(false);

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            children: React.ReactElement<unknown, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    const handleClose = ( reason: "escapeKeyDown" | "backdropClick") => {
        if(reason === "backdropClick")
            return;

        setDialogOpen(false);
    }

    const sendProposition = async(proposition: MissionProposition, skills: SKILLS[]): Promise<void> => {
        const inboxID = "eb2951b6-6832-4bd8-a82b-2bc781eedfe6";
        setSending(true)

        try {
            const response = await mailslurp.sendEmail(inboxID, {
                to: ['nanmegningassam@gmail.com'],
                cc: ['marreckgilles@gmail.com'],
                subject: "PROPOSITION DE MISSION",
                isHTML: true,
                body: emailFormat(proposition, skills),
            })
            
            console.log(response);
            handleNext(); 
            // TODO: Show the snackbar
        } catch(error) {
            console.error("Error while sending email : ", error);
            // TODO: Show the snackbar
        } finally {
            setDialogOpen(false);
        }
    }

    return (
        <Dialog
            open={isDialogOpen}
            TransitionComponent={!isSending ? Transition : undefined}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth="laptop"

        >
            <DialogTitle variant="h5" color="secondary" sx={{ textAlign: "center", fontWeight: 500, textTransform: "uppercase", mb: 2, mt: 2 }}>
                Récapitulatif de la proposition de mission
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => handleClose("escapeKeyDown")}
                color="secondary"
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CancelIcon />
            </IconButton>
            <EmailTemplate
                proposition={{...proposition, skills}}
            />
            <DialogActions>
                <Button 
                    className="removeButtonOutline" 
                    onClick={() => setDialogOpen(false)}
                    variant="outlined"
                    color="secondary"
                    sx={{ minWidth: 100 }}
                >
                    Annuler
                </Button>
                <Button 
                    className="removeButtonOutline" 
                    onClick={async () => await sendProposition(proposition, skills)}
                    variant="contained"
                    color="secondary"
                    sx={{ minWidth: 100 }}
                >
                    {isSending ? (
                        <CircularProgress color="inherit" size={22} />
                    ): (
                        <span>Envoyer</span>
                    )}
                    
                </Button>
            </DialogActions>
        </Dialog>
    );
}
 
export default ConfirmDialog;