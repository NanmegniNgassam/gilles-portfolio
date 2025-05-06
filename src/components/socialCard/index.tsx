import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { SocialExperience } from "../../utils/voluntering";
import styles from "./socialCard.module.css";
import { useTranslation } from "react-i18next";
import { AlarmOutlined, ArrowForwardOutlined, CalendarMonth, LocationOnOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDuration, formatPeriod } from "../../utils/relativeTime";



const SocialCard = ( { experience }: { experience: SocialExperience } ) => {
    const [t, translate] = useTranslation("global");
    

    
    return (
        <Card sx={{ maxWidth: 400, minHeight: 390, position: "relative" }} >
            <div className={`${styles.banner} ${ !experience.isProgressing && styles.statusDone}`}>
                { experience.isProgressing ? t("general.status.inProgress") : t("general.status.done") }
            </div>
            <CardMedia
                component="img"
                height="200"
                image={experience.coverImage}
            />
            <CardContent>
                <div className={styles.titleSection}>
                    <h3> { t("pages.home.container.titles.experiences.positions." + experience.description) } </h3>
                    <img src={experience.associationImage} />
                </div>
                <Stack sx={{ mb: 2 }} flexDirection="row" gap={1} alignItems="center">
                    <CalendarMonth color="secondary" />
                    <Typography fontSize="0.95rem">
                        { formatPeriod(translate.language, experience.start, experience.end) }
                    </Typography>
                </Stack>
                <Stack sx={{ mb: 2 }}>
                    <Stack flexDirection="row" gap={1} alignItems="center">
                        <AlarmOutlined color="secondary" />
                        <Typography fontSize="small"> 
                            { formatDuration(experience.duration, experience.durationUnit, translate.language) } 
                        </Typography>
                    </Stack>
                    <Stack flexDirection="row" gap={1} alignItems="center">
                        <LocationOnOutlined color="secondary" />
                        <Typography fontSize="small"> { experience.location } </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ mb: 3 }}>
                    <strong>{ t("general.keywords.description") }.</strong>
                    <Typography fontSize="small" sx={{ textAlign: "justify", textIndent: 30, mt: 1}}>
                        { t("pages.home.container.titles.experiences.descriptions." + experience.title) }
                    </Typography>
                </Stack>
                <motion.div initial={{rotate: -90}} whileInView={{ rotate: 0 }} transition={{ duration: 0.5 }} className={styles.moreButton} >
                    <Link to={experience.link}  target="_blank" className={styles.stack}> 
                        <ArrowForwardOutlined  sx={{ width: 25 }} />
                    </Link>
                </motion.div>
            </CardContent>
        </Card >
    );
}
 
export default SocialCard;