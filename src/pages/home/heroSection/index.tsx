import { Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import gilles from "../../../assets/images/Gilles.png";
import { links } from "../../../utils/socialLinks";
import styles from "./heroSection.module.css";
import { TitleHook } from "./HeroSection.styles";


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
                {links.map((link, index) => (
                    <Tooltip title={t("pages.home.heroSection.tooltipLabels." + link.title)} placement="top" key={index}>
                        <a className={styles.linkContainer} href={link.url} target='_blank'>
                            <img src={link.imageUrl} alt={t("pages.home.heroSection.tooltipLabels." + link.title)} />
                        </a>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}
 
export default HeroSection;