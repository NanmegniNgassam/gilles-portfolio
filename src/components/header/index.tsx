import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TranslateRoundedIcon from '@mui/icons-material/Translate';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { StyledLink } from './Header.styles';
import projectLogo from '/logo.png';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.logoWrapper}>
                <img src={projectLogo} alt="My personnal brand logo showing up my values" className={styles.logo} />
                <span className={styles.nameInteraction}>Gilles.</span>
            </Link>
            <div className={styles.navLinksContainer}>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/projects">Projets</StyledLink>
                <StyledLink to="/roadmap">Parcours</StyledLink>
                <StyledLink to="/about">A propos</StyledLink>
            </div>
            <div className={styles.actionsWidgetContainer}>
                <TranslateRoundedIcon htmlColor='black' fontSize='large' className={styles.icon} />
                <PersonRoundedIcon htmlColor='black' fontSize='large' className={styles.icon} />
                <Button variant='contained' sx={{textTransform: 'capitalize'}} className={styles.getInTouch}>Contactez-moi</Button>
            </div>
        </div>
    );
}
 
export default Header;