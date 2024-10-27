import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MultiLanguage from '../multiLanguage';
import styles from './header.module.css';
import { StyledLink } from './Header.styles';
import projectLogo from '/logo.png';

const Header = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, _] = useTranslation("global");
    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.logoWrapper}>
                <img src={projectLogo} alt={t("Header.AltMessages.logo")} className={styles.logo} />
                <span className={styles.nameInteraction}>Gilles.</span>
            </Link>
            <div className={styles.navLinksContainer}>
                <StyledLink to="/">{t("Header.NavLinks.landing")}</StyledLink>
                <StyledLink to="/projects">{t("Header.NavLinks.projects")}</StyledLink>
                <StyledLink to="/roadmap">{t("Header.NavLinks.roadMap")}</StyledLink>
                <StyledLink to="/about">{t("Header.NavLinks.about")}</StyledLink>
            </div>
            <div className={styles.actionsWidgetContainer}>
                <MultiLanguage />
                <Button variant='contained' className="removeButtonOutline">{t("Header.Actions.getInTouch")}</Button>
            </div>
        </div>
    );
}
 
export default Header;