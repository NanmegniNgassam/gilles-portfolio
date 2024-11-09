import { useEffect } from "react";
import TrustCompanies from "../components/trustCompanies";
import FieldsSection from "./fieldsSection";
import HeroSection from "./heroSection";
import styles from "./home.module.css";
import Title from "../../components/title";
import { useTranslation } from "react-i18next";
import TechLanguages from "./techLanguages";
import RoadmapSection from "./roadmapSection";

const Home = () => {
    const {t} = useTranslation('global');
    useEffect(() => {
        document.title = 'Gilles NGASSAM | Landing'
    }, [])

    return (
        <div>
            <HeroSection />
            <div className={styles.mainContainer}>
                <FieldsSection />
                
            </div>

            <RoadmapSection />
            
            <div className={styles.mainContainer}>
                <TechLanguages />
                <Title 
                    actualTitle={"Expériences sociales"}
                    titleHook={"Associations"}
                    titleDescription={t("pages.home.container.titles.domains.description")}
                />
                <TrustCompanies />
            </div>
        </div>
    );
}
 
export default Home;