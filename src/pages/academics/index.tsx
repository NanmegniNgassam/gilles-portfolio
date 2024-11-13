import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Skill from "../../components/skill";
import styles from "./academics.module.css";
import Title from "../../components/title";

const Academics = () => {
    const {t} = useTranslation("global"); 
    interface Grade {
        title: string;
        /*
        An estimation of the skill represented as percentage
        As a percentage, it should be between 0 and 100 (both included) 
        */
        level: number;
    }
    
    const skills: Grade[] = [
        { level: 91, title: "Web development" },
        { level: 81, title: "Mobile Development" },
        { level: 83, title: "UX Design" },
        { level: 80, title: "Versioning, CI/CD, ..." },
        { level: 86, title: "Project Management" },
        { level: 67, title: "Artificial Intelligence" }
    ];

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
                {skills.map((skill, key) => (
                    <Skill skill={skill} key={key} />
                ))}
            </div>

        </div>
        
    );
}
 
export default Academics;