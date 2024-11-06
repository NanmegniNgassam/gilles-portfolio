import { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../../components/title";
import { allSkills, SKILLS } from "../../utils/skills";
import TrustCompanies from "../components/trustCompanies";
import styles from "./hire.module.css";
import ProfilSection from "./profilSection";
import ContactForm from "./contactForm";


const Hire = () => {
    const { t } = useTranslation("global");
    const [skills, setSkills] = useState<Set<SKILLS>>(new Set<SKILLS>([SKILLS.MOBILE_DEVELOPMENT, SKILLS.WEB_DEVELOPMENT]));

    const addSkill = (skill: SKILLS) => {
        if(!allSkills.includes(skill)) 
            return;
        if(skills.has(skill)) 
            return;

        setSkills((prevSkills) => new Set<SKILLS>([
            ...prevSkills,
            skill
        ]))
    }

    const removeSkill = (newSkill: SKILLS) => {
        if(!allSkills.includes(newSkill)) 
            return;

        if(skills.has(newSkill)) {
            setSkills((prevSkills) => new Set<SKILLS>([...prevSkills].filter((skill) => skill !== newSkill)));
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
                <ContactForm skills={skills} />
            </div>
            
            <TrustCompanies />
        </div>
    );
}
 
export default Hire;