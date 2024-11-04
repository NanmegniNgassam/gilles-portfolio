import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MultiLanguage from '../multiLanguage';
import styles from './header.module.css';
import { StyledLink } from './Header.styles';
import projectLogo from '/logo.png';
import { motion } from "framer-motion"
import MobileNavWidget from '../mobileNavWidget';
 
const Header = () => {
    const { t } = useTranslation("global");
    const logoImageVariants = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    const logoLabelVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    const navLinksData = [
        {
            link: "/",
            label: t("Header.NavLinks.landing")
        },
        {
            link: "/projects",
            label: t("Header.NavLinks.projects")
        },
        {
            link: "/roadmap",
            label: t("Header.NavLinks.roadMap")
        },
        {
            link: "/about",
            label: t("Header.NavLinks.about")
        },
    ];

    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.logoWrapper}>
                <motion.img 
                    src={projectLogo} 
                    alt={t("Header.AltMessages.logo")} 
                    className={styles.logo} 
                    variants={logoImageVariants} 
                    initial="hidden"
                    animate="visible"
                />
                <motion.span 
                    className={styles.nameInteraction} 
                    variants={logoLabelVariants} 
                    initial="hidden" 
                    animate="visible"
                >
                    Gilles.
                </motion.span>
            </Link>
            <div className={styles.navLinksContainer}>
                {navLinksData.map((navLink, index) => (
                    <StyledLink key={index} to={navLink.link}>
                        {navLink.label}
                    </StyledLink>
                ))}
            </div>
            <div className={styles.actionsWidgetContainer}>
                <MultiLanguage />
                <Link to="/hire">
                    <Button 
                        variant='contained' 
                        className="removeButtonOutline" 
                        sx={{
                            px: {mobile: 1, laptop: 2},
                            py: {mobile: 0.5, tablet: 0.75, laptop: 1},
                            fontSize: {mobile: 13, tablet: 14, laptop: 15}
                        }}
                    >
                        {t("Header.Actions.getInTouch")}
                    </Button>
                </Link>

            </div>
            <MobileNavWidget />
        </div>
    );
}

export default Header;