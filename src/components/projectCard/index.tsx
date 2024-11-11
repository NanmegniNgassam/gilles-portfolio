import { AlarmOutlined, CalendarMonth } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Project } from "../../utils/interfaces";
import { formatDuration, formatPeriod } from "../../utils/relativeTime";
import styles from "./projectCard.module.css";



const ProjectCard = ( { project }: { project: Project } ) => {
    const [t, translate] = useTranslation("global");
    
    return (
        <Link to={"/projects/" + project.id}>
            <Card sx={{ maxWidth: 380, minHeight: 390, position: "relative" }} elevation={4} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image={project.coverImage}
                    />
                    <CardContent>
                        <div className={styles.titleSection}>
                            <h3> { t("pages.projects.projects.titles." + project.title) } </h3>
                            <img src={project.associationImage} />
                        </div>
                        <Stack sx={{ mb: 1 }} flexDirection="row" gap={1} alignItems="center">
                            <CalendarMonth color="secondary" />
                            <Typography fontSize="0.90rem">
                                { formatPeriod(translate.language, project.start, project.end) }
                            </Typography>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <Stack flexDirection="row" gap={1} alignItems="center">
                                <AlarmOutlined color="secondary" />
                                <Typography fontSize="small"> 
                                    { formatDuration(project.duration, project.durationUnit, translate.language) } 
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <strong>{ t("general.keywords.description") }.</strong>
                            <Typography fontSize="small" sx={{ textAlign: "justify", textIndent: 30, mt: 1}} className={styles.description}>
                                { t("pages.projects.projects.descriptions." + project.title) }
                            </Typography>
                        </Stack>
                        <Stack sx={{ mb: 2 }}>
                            <strong>{ t("general.keywords.stack") }.</strong>
                            <div className={styles.stack}>
                                {project.tools.map((tool, key) => (
                                    <img src={tool.imageUrl} alt={tool.name} key={project.id + key} />
                                ))}
                            </div>
                        </Stack>
                        <Button variant="contained">En savoir plus</Button>
                    </CardContent>
                </CardActionArea>
            </Card >
        </Link>
    );
}
 
export default ProjectCard;