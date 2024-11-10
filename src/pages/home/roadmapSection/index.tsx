import styles from "./roadmap.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../../components/title";
import SwiperSection from "../../../components/swiper";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const RoadmapSection = () => {
    const {t} = useTranslation('global');

    return (
        <>
            <Title
                actualTitle={t("pages.home.container.titles.experiences.main")}
                titleHook={t("pages.home.container.titles.experiences.hook")}
                titleDescription=""
            />
            <div className={styles.roadMapContainer}>
                <div className={styles.swiperContainer}>
                    <SwiperSection />
                </div>
                <div className={styles.descriptionContainer}>
                    <h2 className={styles.title}>
                        {t("pages.home.container.titles.experiences.title")}
                    </h2>
                    <Typography sx={{ textIndent: 60, textAlign: "justify" }} className={styles.description}>
                        {t("pages.home.container.titles.experiences.description")}
                    </Typography>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <Link to="/projects">
                            <Button className="removeButtonOutline" variant="contained">
                                {t("Header.NavLinks.projects")}
                            </Button>
                        </Link>
                        <Link to="/roadmap">
                            <Button className="removeButtonOutline" variant="contained">
                                {t("Header.NavLinks.roadMap")}
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
        </>
    );
}

// TODO: Donner une liste d'image à l'objet swiper et le laisser faire le taf.
export default RoadmapSection;