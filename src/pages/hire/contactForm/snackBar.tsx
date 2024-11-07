import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

interface CustomSnackBarType {
    isError: boolean;
}

const CustomSnackBar = ({isError}: CustomSnackBarType) => {
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
                    Votre proposition n'a pas pu être envoyé !
                </Alert>
            </Snackbar>
        </div>
    );
}
 
export default CustomSnackBar;