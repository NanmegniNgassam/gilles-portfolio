import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import cardDiamond from '../../assets/images/card_diamond_icon.png';
import { socialsMedia } from '../../utils/socials';
import styles from './footer.module.css';
import { TitleHook } from './Footer.styles';

const Footer = () => {
    const { t } = useTranslation("global");
    const linkHoverAnimation = {
        y: -10
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
        <div className={styles.footerContainer}>
            <TitleHook>
                Portfolio <TitleHook className={styles.actualHook}>Gilles</TitleHook>.
            </TitleHook>
            <div className={styles.linksContainer}>
                {socialsMedia.map((socialMedia, id) => (
                    socialMedia.clickable ? (
                        <a key={id} href={socialMedia.link} target='_blank'>
                            <motion.div className={styles.linkContainer} whileHover={linkHoverAnimation}>
                                <img src={socialMedia.image} alt={socialMedia.altDescription} />
                            </motion.div>
                        </a>
                    ) : (
                        <Tooltip  key={id} title={socialMedia.link} placement="top">
                            <div className={styles.linkContainer} >
                                <img src={socialMedia.image} alt={socialMedia.altDescription} />
                            </div>
                        </Tooltip>
                    )
                    
                ))}
            </div>

            <div className={styles.navLinks}>
                {navLinksData.map((navLink, index) => (
                    <span key={index}>
                        <Link to={navLink.link}>
                            {navLink.label}
                        </Link>
                        <img src={cardDiamond} alt='Separate navigation links' />
                    </span>
                ))}
                <Link to="/hire">
                    {t("Header.Actions.getInTouch")}
                </Link>
            </div>

            <div className={styles.credentials}>
                © {t("Footer.copyrightsLabel")}
                <span className={styles.actualHook}> 2024</span>. 
                {t("Footer.authorLabel")}
                <span className={styles.actualHook}> Gilles NGASSAM</span>.
            </div>
        </div>
    );
}
 
export default Footer;