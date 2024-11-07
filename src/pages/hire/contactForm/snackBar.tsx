import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CustomSnackBarType {
    isError: boolean;
}

const CustomSnackBar = ({isError}: CustomSnackBarType) => {
    const {t} = useTranslation("global");
    const [open, setOpen] = useState(isError);
  
    const handleClose = (
      _?: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ maxWidth: '90%', width: 400 }}
                >
                    { t("pages.hire.contactForm.mailError") }
                </Alert>
            </Snackbar>
        </div>
    );
}
 
export default CustomSnackBar;