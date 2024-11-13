import { Button, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gilles from "../../assets/images/Gilles.png";
import { links } from "../../utils/socialLinks";
import styles from "./about.module.css";

const About = () => {
    const { t } = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.about");
    }, [t]);
    
    return (
        <div className={styles.globalContainer}>
            <div className={styles.container}>
                <div className={styles.blob}>
                    <img src={gilles} className={styles.image} />
                    <span className={styles.pulse} data-delay="0"></span>
                    <span className={styles.pulse} data-delay="1"></span>
                    <span className={styles.pulse} data-delay="2"></span>
                    <span className={styles.pulse} data-delay="3"></span>
                </div>
                <div className={styles.content}>
                    <h1>Gilles NGASSAM ({ t("general.keywords.pronoun") })</h1>
                    <h3> { t("pages.about.studentStatus") } <Link to="https://www.utbm.fr/" target="_blank" className={styles.link}>@UTBM</Link>  { t("general.keywords.connector") } { t("pages.about.workStatus") }.</h3>
                    <div className={styles.description}>
                        <p> { t("pages.about.description.firstSection") } </p> 
                        <p> { t("pages.about.description.secondSection") } </p>
                        <p> { t("pages.about.description.thirdSection") } </p>
                    </div>
                </div>
                <Link to="/hire">
                    <Button variant="contained">{t("pages.projects.callToActionButton")}</Button>
                </Link>
                <div className={styles.linksContainer}>
                    {links.map((link, index) => (
                        <Tooltip title={t("pages.home.heroSection.tooltipLabels." + link.title)} placement="top" key={index}>
                            <a className={styles.linkContainer} href={link.url} target='_blank'>
                                <img src={link.imageUrl} alt={t("pages.home.heroSection.tooltipLabels." + link.title)} />
                            </a>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default About;