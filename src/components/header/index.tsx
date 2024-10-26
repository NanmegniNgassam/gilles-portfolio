import styles from './header.module.css';
import projectLogo from '/logo.png'
import TranslateRoundedIcon from '@mui/icons-material/Translate';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import './header.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            
            <div className={styles.logoWrapper}>
                <img src={projectLogo} alt="My personnal brand logo showing up my values" className={styles.logo} />
                <span className={styles.nameInteraction}>Gilles.</span>
            </div>
            <div className={styles.navLinksContainer}>
                <a href="/" className={styles.navLink}>Accueil</a>
                <a href="/" className={styles.navLink}>Projets</a>
                <a href="/" className={styles.navLink}>Parcours</a>
                <a href="/" className={styles.navLink}>A propos</a>
            </div>
            <div className={styles.actionsWidgetContainer}>
                <TranslateRoundedIcon htmlColor='black' fontSize='large' className={styles.icon} />
                <PersonRoundedIcon htmlColor='black' fontSize='large' className={styles.icon} />
                <div className={styles.getInTouch}>Contactez-moi</div>
            </div>
        </div>
    );
}
 
export default Header;