import { AlarmOutlined, CalendarMonth } from "@mui/icons-material";
import { Avatar, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Project } from "../../utils/interfaces";
import { formatDuration, formatPeriod } from "../../utils/relativeTime";
import styles from "./academictCard.module.css";
import { Link } from "react-router-dom";



const AcademicCard = ( { academic, completeCard }: { academic: Project, completeCard?: boolean } ) => {
    const [t, translate] = useTranslation("global");
    
    return (
        <Link to={academic.link!} target="_blank">
            <Card 
                sx={{ maxWidth: completeCard ? 450 : 350, minHeight: 390, position: "relative" }} 
                elevation={4} 
                className={styles.container}
            >
                <CardActionArea>
                    <CardContent>
                        { completeCard && (
                            <Avatar src={academic.associationImage} 
                                sx={{ mb: 2, width: 60, height: 60, boxShadow: "1px 1px 6px black" }} 
                            />
                        )}
                        <h3> { t("pages.roadMap.timeline.experiences.titles." + academic.title) } </h3>
                        <Stack sx={{ mb: 1 }} flexDirection="row" gap={1} alignItems="center">
                            <CalendarMonth color="secondary" />
                            <Typography fontSize="0.8rem">
                                { formatPeriod(translate.language, academic.start, academic.end) }
                            </Typography>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <Stack flexDirection="row" gap={1} alignItems="center">
                                <AlarmOutlined color="secondary" />
                                <Typography fontSize="small"> 
                                    { formatDuration(academic.duration, academic.durationUnit, translate.language) } 
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <strong>{ t("general.keywords.description") }.</strong>
                            <Typography fontSize="small" sx={{ textAlign: "justify", textIndent: 30, mt: 1}} className={styles.description}>
                                { t("pages.roadMap.timeline.experiences.descriptions." + academic.description) }
                            </Typography>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <strong>{ t("general.keywords.stack") }.</strong>
                            <div className={styles.stack}>
                                {academic.tools.map((tool, key) => (
                                    <img src={tool.imageUrl} alt={tool.name} key={academic.id + key} />
                                ))}
                            </div>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card >
        </Link>

    );
}
 
export default AcademicCard;