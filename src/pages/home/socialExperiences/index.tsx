import { useTranslation } from "react-i18next";
import SocialCard from "../../../components/socialCard";
import Title from "../../../components/title";
import { volunteeringExperiences } from "../../../utils/voluntering";
import styles from "./socialExperiences.module.css";

const SocialExperiences = () => {
    const { t } = useTranslation("global");


    return (
        <div className={styles.socialExperiencesContainer}>
            <Title
                actualTitle={t("pages.home.socials.title.main")}
                titleHook={t("pages.home.socials.title.hook")}
                titleDescription={t("pages.home.socials.title.description")}
            />
            <div className={styles.experiencesContainer}>
                {volunteeringExperiences.map((experience, index) => (
                    <SocialCard experience={experience} key={index} />
                ))}
            </div>
        </div>
    );
}
 
export default SocialExperiences;