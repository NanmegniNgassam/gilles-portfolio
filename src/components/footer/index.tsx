import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import behance from '../../assets/images/behance.png';
import cardDiamond from '../../assets/images/card_diamond_icon.png';
import discord from '../../assets/images/discord.png';
import github from '../../assets/images/github.png';
import gmail from '../../assets/images/gmail.png';
import linkedIn from '../../assets/images/linkedin.png';
import styles from './footer.module.css';
import { TitleHook } from './Footer.styles';

const Footer = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, _] = useTranslation("global");

    return (
        <div className={styles.footerContainer}>
            <TitleHook>
                Portfolio <TitleHook className={styles.actualHook}>Gilles</TitleHook>.
            </TitleHook>

            <div className={styles.linksContainer}>
                <div className={styles.linkContainer}>
                    <img src={linkedIn} alt="A link to my LinkedIn's account" />
                </div>
                <div className={styles.linkContainer}>
                    <img src={gmail} alt="A link to my Gmail's account" />
                </div>
                <div className={styles.linkContainer}>
                    <img src={github} alt="A link to my GitHub's account" />
                </div>
                <div className={styles.linkContainer}>
                    <img src={behance} alt="A link to my Behance's account" />
                </div>
                <div className={styles.linkContainer}>
                    <img src={discord} alt="A link to my Discord's account" />
                </div>
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