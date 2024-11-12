import { CalendarMonth } from "@mui/icons-material";
import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../utils/interfaces";
import { formatPeriod } from "../../utils/relativeTime";
import styles from "./project.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Project = () => {
    const [ t, translate ] = useTranslation("global");
    const { id } = useParams() as {id: string};
    const projectId = Number(id);
    const project = projects.find((project) => project.id === projectId);

    return (
        <div className={styles.container}>
            <Stack sx={{ justifyContent: "start", width: "100%", mt: 2, mb: 2 }}>
                <Link  to="/projects">
                    <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
                        <ArrowBackIosIcon fontSize="small" /> { t("pages.project.seeAllProjects") }
                    </Stack>
                </Link>
            </Stack>
            
            <img className={styles.companyImage} src={project!.associationImage} />
            <h1 className={styles.title}> { t("pages.projects.projects.titles." + project!.title) } </h1>
            <Stack sx={{ mb: 1 }} flexDirection="row" gap={1} alignItems="center">
                <CalendarMonth color="secondary" />
                <Typography fontSize="0.90rem">
                    { formatPeriod(translate.language, project!.start, project!.end) }
                </Typography>
            </Stack>
            <Stack sx={{ mb: 1, mt: 2 }} flexDirection="row" gap={1}>
                {project!.link && (
                    <Link to={project!.link} target="_blank">
                        <Button variant="contained" className="removeButtonOutline">
                            { t("pages.project.viewProduct") }
                        </Button>
                    </Link>
                )}
                {project!.code && (
                    <Link to={project!.code} target="_blank">
                        <Button variant="outlined" className="removeButtonOutline">
                            { t("pages.project.examineCode") }
                        </Button>
                    </Link>
                )}
            </Stack>
            <Stack sx={{ mb: 3, mt: 3 }}>
                <strong>{ t("general.keywords.stack") }.</strong>
                <div className={styles.stack}>
                    {project!.tools.map((tool, key) => (
                        <Tooltip title={tool.name} placement="top" key={project!.id + key}>
                            <img src={tool.imageUrl} alt={tool.name}  />
                        </Tooltip>
                    ))}
                </div>
            </Stack>
            <img className={styles.coverImage} src={project!.coverImage} />
            <Typography fontSize="1.1rem" sx={{ textAlign: "justify", textIndent: 60, mt: 1}} className={styles.description}>
                { t("pages.projects.projects.descriptions." + project!.description) }
            </Typography>
        </div>
    );
}

export default Project;