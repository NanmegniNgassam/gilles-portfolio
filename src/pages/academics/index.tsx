import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Skill from "../../components/skill";
import styles from "./academics.module.css";
import Title from "../../components/title";

const Academics = () => {
    const {t} = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.roadMap");
    }, [t]);
    
    return (
        <div className={styles.container}>
            <div>
                <Title 
                    actualTitle={t("pages.roadMap.titles.experience.main")}
                    titleHook={t("pages.roadMap.titles.experience.hook")}
                    titleDescription={t("pages.roadMap.titles.experience.description")}
                />
            </div>
            <Title 
                actualTitle={t("pages.roadMap.titles.competences.main")}
                titleHook={t("pages.roadMap.titles.competences.hook")}
                titleDescription={t("pages.roadMap.titles.competences.description")}
            />
            <div className={styles.skillsContainer}>
                <Skill skill={{ level: 91, title: "Web development" }} />
                <Skill skill={{ level: 81, title: "Mobile Development" }} />
                <Skill skill={{ level: 83, title: "UX Design" }} />
                <Skill skill={{ level: 80, title: "Versioning, CI/CD, ..." }} />
                <Skill skill={{ level: 86, title: "Project Management" }} />
                <Skill skill={{ level: 67, title: "Artificial Intelligence" }} />
            </div>

        </div>
        
    );
}
 
export default Academics;