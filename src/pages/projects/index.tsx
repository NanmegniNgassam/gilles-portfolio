import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../components/loader";
import styles from "./projects.module.css";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../../components/title";
import { FilterList, SwapVertOutlined } from "@mui/icons-material";

const Projects = () => {
    const {t} = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.projects");
    }, [t]);
    
    return (
        <>
            <div className={styles.container}>
                <Loader />
                <Stack alignItems="center" gap={1}>
                    <Typography textAlign="center" fontSize="1.4rem"> Do you have an idea in mind ? </Typography>
                    <Link to="/hire">
                        <Button variant="contained">Let's talk about it !</Button>
                    </Link>
                </Stack>
            </div>
            <Title 
                titleHook="Projets"
                actualTitle="UN APERçU DE MES PROJETS"
                titleDescription="Vous retrouverez ici la plupart des projets que j'ai entrepri, les projets sur les quels j'ai considérablement pris part et l'ensemble des missions non confidentiels sur lesquelles j'ai travaillé."
            />
            <div className={styles.projectsContainer}>
                <Stack justifyContent="space-between" direction="row" alignItems="center" >
                    <Stack direction="row" gap={3}>
                        <Stack direction="row">
                            <SwapVertOutlined />
                            <span>Classer par</span>
                        </Stack>
                        <Stack direction="row">
                            <FilterList />
                            <span>Filtrer</span>
                        </Stack>
                    </Stack>
                    <Stack direction="row" gap={1} alignItems="center">
                        <Typography 
                            component="strong" 
                            color="primary" 
                            fontWeight="500" 
                            fontSize="1.2rem"
                            className={styles.specialText}
                        > 03 </Typography> 
                        <Typography >
                            
                            Projets remplissent les critères spécifiés.
                        </Typography>
                    </Stack>
                </Stack>
                <div className={styles.projects}>
                    
                </div>
            </div>
        </>
    );
}
 
export default Projects;