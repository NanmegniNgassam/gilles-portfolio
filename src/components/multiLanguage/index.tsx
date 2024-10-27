import TranslateRoundedIcon from '@mui/icons-material/Translate';
import { IconButton, Menu, Tooltip } from "@mui/material";
import { useState } from "react";
import { StyledMenuItem } from "./MultiLanguage.styles";
import { AvailableLanguageCodes, availableLanguages } from '../../utils/languages';


const MultiLanguage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isLanguageMenuOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const onLanguageSelected = (lang : AvailableLanguageCodes) => {
        // Set the lang as the app language and save this config in cookies for 30 days.
        // Dispatch a specific action
        console.log("You've selected : ", lang);

        handleClose();
    }

    return (
        <>
            <Tooltip title="change the language" arrow placement='top'>
                <IconButton 
                    onClick={handleClick} 
                    style={{color: '#4b4b4b'}} 
                    className="removeButtonOutline"
                    aria-controls={isLanguageMenuOpen ? 'language-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isLanguageMenuOpen ? 'true' : undefined}
                >
                    <TranslateRoundedIcon />
                </IconButton>
            </Tooltip>
            <Menu 
                anchorEl={anchorEl} 
                open={isLanguageMenuOpen} 
                id='language-menu'
                onClose={handleClose}
                slotProps={{
                    paper: {
                        elevation: 1,
                        sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1,
                        '& .MuiAvatar-root': {
                            width: 'fit-content',
                            background: 'black',
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: '50%',
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) translateX(50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
                {availableLanguages.map((language) => (
                    <StyledMenuItem key={language.code} onClick={() => onLanguageSelected(language.code)}>
                        <img alt='English flag' src={language.flagSrc}/>
                        <span>{language.name}</span>
                    </StyledMenuItem>
                ))}
            </Menu>
        </>
    );
}
 
export default MultiLanguage;