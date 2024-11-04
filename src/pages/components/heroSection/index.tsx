import { useTranslation } from "react-i18next";
import styles from "./heroSection.module.css";
import gilles from "../../../assets/images/Gilles.png";
import github from '../../../assets/images/github.png';
import gmail from "../../../assets/images/gmail.png";
import linkedIn from '../../../assets/images/linkedin.png';
import download from '../../../assets/images/download.png';
import cv from "../../../assets/data/NANMEGNI_NGASSAM_Gilles_Pavel_CV.pdf";
import { TitleHook } from "./HeroSection.styles";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";


const HeroSection = () => {
    const {t} = useTranslation("global");
    const isEvening = new Date().getHours() >= 17;
    const heroImageVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
        }
    }
    
    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <TitleHook className={styles.title}>
                        { isEvening ? t("pages.home.heroSection.eveningGreeting") : t("pages.home.heroSection.morningGreeting") }, {" "}
                        { t("pages.home.heroSection.introductionFormula")} <TitleHook as="div" className={styles.colorHook}>Gilles NGASSAM</TitleHook>.
                    </TitleHook>                            
                    <Typewriter
                        component="h2"
                        options={{
                            cursor: "_",
                            strings: [
                                t("general.skills.uxDesigner"), 
                                t("general.skills.frontendDeveloper"), 
                                t("general.skills.backendDeveloper"), 
                                t("general.skills.fullStackDeveloper")
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <span className={styles.letmotiv}>
                        {t("pages.home.heroSection.letMotiv")}
                    </span>
                    <div className={styles.actions}>
                        <Link to="hire">
                            <Button variant="contained" className="removeButtonOutline">{ t("general.hireMeLabel") }</Button>
                        </Link>
                        <Link to="projects">
                            <Button 
                                variant="outlined" 
                                className="removeButtonOutline" 
                                style={{ borderWidth: 2, }}
                            >
                                { t("general.seeMyProjects") }
                            </Button>
                        </Link>
                    </div>
                </div>
                <motion.div variants={heroImageVariants} initial="hidden" animate="visible" className={styles.imageContainer}>
                    <img src={gilles} className={styles.heroImage} alt="Humbly image of myself" />
                </motion.div>
            </div>
            <div className={styles.linksContainer}>
                <Tooltip title={ t("pages.home.heroSection.tooltipLabels.sendMail") } placement="top">
                    <a className={styles.linkContainer} href="mailto:nanmegningassam@gmail.com" target='_blank'>
                        <img src={gmail} alt="Default description" />
                    </a>
                </Tooltip>
                <Tooltip title={ t("pages.home.heroSection.tooltipLabels.linkedInProfil") } placement="top">
                    <a className={styles.linkContainer} href="https://www.linkedin.com/in/nanmegni-ngassam-gilles-pavel-825997206" target='_blank'>
                        <img src={linkedIn} alt="Default description" />
                    </a>
                </Tooltip>
                <Tooltip title={ t("pages.home.heroSection.tooltipLabels.resume") } placement="top">
                    <a className={styles.linkContainer} href={cv} target='_blank'>
                        <img src={download} alt="Default description" />
                    </a>
                </Tooltip>
                <Tooltip title={ t("pages.home.heroSection.tooltipLabels.bitOfCode") } placement="top">
                    <a className={styles.linkContainer} href="https://github.com/NanmegniNgassam" target='_blank'>
                        <img src={github} alt="Default description" />
                    </a>
                </Tooltip>
            </div>
        </div>
    );
}
 
export default HeroSection;