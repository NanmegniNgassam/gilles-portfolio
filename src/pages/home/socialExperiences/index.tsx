import { CalendarMonth } from "@mui/icons-material";
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../../components/title";
import { volunteeringExperiences } from "../../../utils/voluntering";
import styles from "./socialExperiences.module.css";

const SocialExperiences = () => {
    const [t, translate] = useTranslation("global");
    const formatter = new Intl.RelativeTimeFormat(translate.language, { numeric: "auto" });

    // Adjusting to show just the duration, e.g., "5 months" or "2 years"
    const formatDuration = (value: number, unit: Intl.RelativeTimeFormatUnit) => {
        const formatted = formatter.formatToParts(value, unit);

        return formatted.map(part => part.value).slice(1).join("");
    };

    // Format periods with internationalization
    const  formatPeriod = (startDate: Date, endDate?: Date) => {
        // Formateur de date pour la locale spécifiée
        const formatter = new Intl.DateTimeFormat(translate.language, {
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
      
        // Formatage des dates de début et de fin
        const formattedStartDate = formatter.format(startDate);
        const formattedEndDate = formatter.format(endDate);
      
        // Génération de la phrase de période en fonction de la locale
        if (translate.language.startsWith("fr")) {
          return `Du ${formattedStartDate} au ${formattedEndDate}`;
        } else if (translate.language.startsWith("en")) {
          return `From ${formattedStartDate} to ${formattedEndDate}`;
        } else {
          return `${formattedStartDate} - ${formattedEndDate}`;
        }
    }

    return (
        <div className={styles.socialExperiencesContainer}>
            <Title
                actualTitle={t("pages.home.socials.title.main")}
                titleHook={t("pages.home.socials.title.hook")}
                titleDescription={t("pages.home.socials.title.description")}
            />
            <div className={styles.experiencesContainer}>
                {volunteeringExperiences.map((experience, index) => (
                    <Card sx={{ maxWidth: 400, minHeight: 390, position: "relative" }} key={index} >
                        <div className={`${styles.experienceBanner} ${ !experience.isProgressing && styles.experienceDone}`}>
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
                                    { formatPeriod(experience.start, experience.end) }
                                </Typography>
                            </Stack>
                            <Stack sx={{ mb: 2 }}>
                                <Stack flexDirection="row" gap={1} alignItems="center">
                                    <AlarmOnOutlinedIcon color="secondary" />
                                    <Typography fontSize="small"> 
                                        { formatDuration(experience.duration, experience.durationUnit) } 
                                    </Typography>
                                </Stack>
                                <Stack flexDirection="row" gap={1} alignItems="center">
                                    <LocationOnOutlinedIcon color="secondary" />
                                    <Typography fontSize="small"> { experience.location } </Typography>
                                </Stack>
                            </Stack>
                            <Stack sx={{ mb: 3 }}>
                                <strong>{ t("general.keywords.description") }.</strong>
                                <Typography fontSize="small" sx={{ textAlign: "justify", textIndent: 30, mt: 1}}>
                                    { t("pages.home.container.titles.experiences.descriptions." + experience.title) }
                                </Typography>
                            </Stack>
                            <Link to={experience.link} target="_blank"> 
                                <div className={styles.moreButton}>
                                    <ArrowForwardOutlinedIcon sx={{ width: 25 }} />
                                </div>
                            </Link>
                        </CardContent>
                    </Card >
                ))}
            </div>
        </div>
    );
}
 
export default SocialExperiences;