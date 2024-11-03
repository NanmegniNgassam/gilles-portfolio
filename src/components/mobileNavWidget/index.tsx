import Add from "@mui/icons-material/Add";
import { ClickAwayListener, IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledLink } from "./MobileNavWidget";
import styles from "./mobileNavWidget.module.css";

const MobileNavWidget = () => {
    const {t} = useTranslation("global");
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const navLinkVariants = {
        hidden : {
            x: "100vw"
        },
        visible : {
            x: 0,
        }
    }

    return (
        <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <div role="presentation" className={styles.widgetContainer}>
                <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className={styles.navLinksContainer} 
                        variants={navLinkVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ x: "100vw" }}
                    >
                        <StyledLink onClick={() => setMenuOpen(false)} to="/about" className={styles.navLinkContainer}>
                            <ion-icon name="information-outline"></ion-icon>
                            {t("Header.NavLinks.about")}
                        </StyledLink>
                        <StyledLink onClick={() => setMenuOpen(false)} to="/roadmap" className={styles.navLinkContainer}>
                            <ion-icon name="school-outline"></ion-icon>
                            {t("Header.NavLinks.roadMap")}
                        </StyledLink>
                        <StyledLink onClick={() => setMenuOpen(false)} to="/projects" className={styles.navLinkContainer}>
                            <ion-icon name="folder-open-outline"></ion-icon>
                            {t("Header.NavLinks.projects")}
                        </StyledLink>
                        <StyledLink onClick={() => setMenuOpen(false)} to="/" className={styles.navLinkContainer}>
                            <ion-icon name="home-outline"></ion-icon>
                            {t("Header.NavLinks.landing")}
                        </StyledLink>
                    </motion.div>
                )}
                </AnimatePresence>

                <IconButton
                    className="removeButtonOutline"
                    style={{
                        backgroundColor: isMenuOpen ? '#f2f2f2' : '#f2b90f',
                        marginRight: "10px"
                    }}
                    size="large"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <Add className={isMenuOpen ? styles.menuOpenedIcon : styles.menuIcon} />
                </IconButton>
        </div>
        </ClickAwayListener>

    );
}
 
export default MobileNavWidget;