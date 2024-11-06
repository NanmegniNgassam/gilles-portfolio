import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Dialog, DialogActions, DialogTitle, IconButton, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { MissionProposition } from "../../../utils/mission";
import EmailFormat from "./emailFormat";
import { SKILLS } from "../../../utils/skills";

interface ConfirmDialogProps {
    isDialogOpen: boolean;
    setDialogOpen: (val: boolean) => void;
    proposition: MissionProposition;
    handleNext: () => void;
    skills: SKILLS[];
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
    const {isDialogOpen, setDialogOpen, proposition, handleNext, skills} = props;

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            children: React.ReactElement<unknown, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClose = ( reason: "escapeKeyDown" | "backdropClick") => {
        if(reason === "backdropClick")
            return;

        setDialogOpen(false);
    }

    return (
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
            <EmailFormat 
                mission={proposition.mission} 
                recruiter={proposition.recruiter} 
                skills={skills}
            />
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
    );
}
 
export default ConfirmDialog;