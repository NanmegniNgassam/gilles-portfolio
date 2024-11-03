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

    return (
        <div className={styles.footerContainer}>
            <TitleHook>
                Portfolio <TitleHook className={styles.actualHook}>Gilles</TitleHook>.
            </TitleHook>
            {/* TODO: Refacto the linksContainer and linksButton */}
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
                <Link to="/">
                    {t("Header.NavLinks.landing")}
                </Link>
                <img src={cardDiamond} alt='Separate navigation links' />
                <Link to="/projects">
                    {t("Header.NavLinks.projects")}
                </Link>
                <img src={cardDiamond} alt='Separate navigation links' />
                <Link to="/roadmap">
                    {t("Header.NavLinks.roadMap")}
                </Link>
                <img src={cardDiamond} alt='Separate navigation links' />
                <Link to="/about">
                    {t("Header.NavLinks.about")}
                </Link>
                <img src={cardDiamond} alt='Separate navigation links' />
                <Link to="/">
                    {t("Header.Actions.getInTouch")}
                </Link>
            </div>

            <div className={styles.credentials}>
                @Copyrights
                <span className={styles.actualHook}> 2024</span>. 
                Designed and coded by 
                <span className={styles.actualHook}> Gilles NGASSAM</span> 
            </div>
        </div>
    );
}
 
export default Footer;