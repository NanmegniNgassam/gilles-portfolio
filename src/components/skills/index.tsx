import { useTranslation } from "react-i18next";
import Title from "../title";
import styles from "./skills.module.css";
import Skill from "../skill";

const Skills = () => {
    const { t } = useTranslation("global"); 
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
    
    return (
        <div>
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
 
export default Skills;