import TranslateRoundedIcon from '@mui/icons-material/Translate';
import { IconButton, Menu, Tooltip } from "@mui/material";
import { motion } from 'framer-motion';
import i18next from 'i18next';
import { useState } from "react";
import { AvailableLanguageCodes, availableLanguages, CURRENT_APP_LANG_LOCALSTORAGE_KEY } from '../../utils/languages';
import { StyledMenuItem } from "./MultiLanguage.styles";


const MultiLanguage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isLanguageMenuOpen = Boolean(anchorEl);
    const spinObjectAnimation = {
        rotate: [20, -20, 15, -15, 10, -10, 5, -5, 0]
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    /**
     * Set the global app language
     * 
     * @param lang the language selected by the user
     */
    const onLanguageSelected = (lang : AvailableLanguageCodes) => {
        // Apply selected language on the app & dismiss the menu
        i18next.changeLanguage(lang);
        handleClose();

        // Save the selected language in the local storage
        localStorage.setItem(CURRENT_APP_LANG_LOCALSTORAGE_KEY, lang);
    }

    return (
        <>
            <Tooltip title="change the language" arrow placement='top'>
                <IconButton 
                    onClick={handleClick} 
                    style={{color: '#4b4b4b'}} 
                    className="removeButtonOutline"
                    component={motion.div}
                    animate={spinObjectAnimation}
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