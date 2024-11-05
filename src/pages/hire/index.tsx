import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../components/title";
import { allSkills, SKILLS } from "../../utils/skills";
import TrustCompanies from "../components/trustCompanies";
import styles from "./hire.module.css";
import ProfilSection from "./profilSection";


const Hire = () => {
    const { t } = useTranslation("global");
    const [skills, setSkills] = useState<SKILLS[]> ([SKILLS.MOBILE_DEVELOPMENT, SKILLS.WEB_DEVELOPMENT])

    const addSkill = (skill: SKILLS) => {
        if(!allSkills.includes(skill)) 
            return;
        if(skills.includes(skill)) 
            return;

        setSkills((prevSkills) => [
            ...prevSkills,
            skill
        ])
    }

    const removeSkill = (newSkill: SKILLS) => {
        if(!allSkills.includes(newSkill)) 
            return;

        if(skills.includes(newSkill)) {
            setSkills((prevSkills) => prevSkills.filter((skill) => skill !== newSkill));
        }
    }

    return (
        <div className={styles.hireContainer}>
            <Title 
                actualTitle={t("pages.hire.title.main")}
                titleHook={t("pages.hire.title.hook")}
                titleDescription={t("pages.hire.title.description")}
                furtherDescription={t("pages.hire.title.furtherDescription")}
            />
            <div className={styles.contactForm}>
                <ProfilSection 
                    skills={skills}
                    addSkill={addSkill}
                    removeSkill={removeSkill}
                />
                <div className={styles.stepperForm}>
                    
                </div>
            </div>
            
            <TrustCompanies />
        </div>
    );
}
 
export default Hire;