import { Button, Card, CardActionArea, CardContent, CardMedia, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import cv from "../../assets/data/NANMEGNI_NGASSAM_Gilles_Pavel_CV.pdf";
import aitools from "../../assets/images/ai-tools.png";
import download from '../../assets/images/download.png';
import frontend from "../../assets/images/frontend.png";
import fullstack from "../../assets/images/fullstack.jpg";
import gilles from "../../assets/images/Gilles.png";
import github from '../../assets/images/github.png';
import gmail from "../../assets/images/gmail.png";
import linkedIn from '../../assets/images/linkedin.png';
import uxDesign from "../../assets/images/ux.jpg";
import Title from "../../components/title";
import styles from "./home.module.css";
import { TitleHook } from "./Home.styles";

const Home = () => {
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

    useEffect(() => {
        document.title = 'Gilles NGASSAM | landing'
    }, [])

    return (
        <div>
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
                            <Button variant="contained" className="removeButtonOutline">{ t("general.hireMeLabel") }</Button>
                            <Button variant="outlined" className="removeButtonOutline" style={{ borderWidth: 2, }}>{ t("general.seeMyProjects") }</Button>
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
            <div className={styles.mainContainer}>
                <div className="expertiseSection">
                    <Title 
                        actualTitle={t("pages.home.container.titles.domains.main")}
                        titleHook={t("pages.home.container.titles.domains.hook")}
                        titleDescription={t("pages.home.container.titles.domains.description")}
                    />
                    <div className={styles.content}>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={uxDesign}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        UX-UI Design
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={fullstack}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Web Development
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={frontend}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mobile Development
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={aitools}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        AI assistant tools
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                    {/* TODO: Download this image for AI illustration (https://www.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_22112068.htm) */}
                    <Title 
                        actualTitle={"Education & stages"}
                        titleHook={"Experiences"}
                        titleDescription={t("pages.home.container.titles.domains.description")}
                    />
                </div>
                
            </div>
        </div>
    );
}
 
export default Home;