import { Button, Tooltip } from "@mui/material";
import gilles from "../../assets/images/Gilles.png";
import gmail from "../../assets/images/gmail.png";
import github from '../../assets/images/github.png';
import linkedIn from '../../assets/images/linkedin.png';
import download from '../../assets/images/download.png';
import cv from "../../assets/data/NANMEGNI_NGASSAM_Gilles_Pavel_CV.pdf"
import styles from "./home.module.css";
import { TitleHook } from "./Home.styles";
import Typewriter  from "typewriter-effect"
import { motion } from "framer-motion"
import { useEffect } from "react";

const Home = () => {
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

    useEffect(() => {
        document.title = 'Gilles NGASSAM | landing'
    }, [])

    return (
        <div>
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <TitleHook className={styles.title}>
                            { isEvening ? "Bonsoir" : "Bonjour" }, 
                            je suis <TitleHook as="div" className={styles.colorHook}>Gilles NGASSAM</TitleHook>
                        </TitleHook>                            
                        <Typewriter
                            component="h2"
                            options={{
                                cursor: "_",
                                strings: ['Développeur Frontend', 'Développeur Backend', "Développeur FullStack", "Designeur UX"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <span className={styles.letmotiv}>
                            La <strong>technologie</strong> doit avant tout apporter une plus value à l'<strong>expérience humaine</strong>, à la <strong>planète </strong> 
                            et porter les <strong>interactions sociales</strong> de la suffisance à l'<strong>excellence</strong>. 
                        </span>
                        <div className={styles.actions}>
                            <Button variant="contained" className="removeButtonOutline">Me recruter</Button>
                            <Button variant="outlined" className="removeButtonOutline" style={{ borderWidth: 2, }}>Voir mes projets</Button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <motion.img variants={heroImageVariants} initial="hidden" animate="visible" src={gilles} className={styles.heroImage} alt="Humbly image of myself" />
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    <Tooltip title="Envoyer moi un mail" placement="top">
                        <a className={styles.linkContainer} href="mailto:nanmegningassam@gmail.com" target='_blank'>
                            <img src={gmail} alt="Default description" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Consulter mon profil" placement="top">
                        <a className={styles.linkContainer} href="https://www.linkedin.com/in/nanmegni-ngassam-gilles-pavel-825997206" target='_blank'>
                            <img src={linkedIn} alt="Default description" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Télécharger mon CV" placement="top">
                        <a className={styles.linkContainer} href={cv} target='_blank'>
                            <img src={download} alt="Default description" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Voir un aperçu de mon code" placement="top">
                        <a className={styles.linkContainer} href="https://github.com/NanmegniNgassam" target='_blank'>
                            <img src={github} alt="Default description" />
                        </a>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
}
 
export default Home;