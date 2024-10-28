import styles from './footer.module.css';
// import Dosis from '../../assets/fonts/Dosis-VariableFont_wght.ttf';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h2>Portfolio Gilles</h2>
            <div className="linksContainer"></div>
            <div className="navLinks"></div>
            <div className={styles.credentials}>
                @Copyrights 2024. Designed and coded by Gilles NGASSAM 
            </div>
        </div>
    );
}
 
export default Footer;