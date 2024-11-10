import { useEffect } from "react";
import TrustCompanies from "../components/trustCompanies";
import FieldsSection from "./fieldsSection";
import HeroSection from "./heroSection";
import styles from "./home.module.css";
import RoadmapSection from "./roadmapSection";
import SocialExperiences from "./socialExperiences";
import TechLanguages from "./techLanguages";

const Home = () => {
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
                <SocialExperiences />
                <TrustCompanies />
            </div>
        </div>
    );
}
 
export default Home;