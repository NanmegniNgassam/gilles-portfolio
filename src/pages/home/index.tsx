import { useEffect } from "react";
import TrustCompanies from "../components/trustCompanies";
import FieldsSection from "./fieldsSection";
import HeroSection from "./heroSection";
import styles from "./home.module.css";
import Title from "../../components/title";
import { useTranslation } from "react-i18next";

const Home = () => {
    const {t} = useTranslation('global');
    useEffect(() => {
        document.title = 'Gilles NGASSAM | landing'
    }, [])

    return (
        <div>
            <HeroSection />
            <div className={styles.mainContainer}>
                <FieldsSection />
                <Title 
                    actualTitle={"Education & stages"}
                    titleHook={"Experiences"}
                    titleDescription={t("pages.home.container.titles.domains.description")}
                />
                <TrustCompanies />
            </div>
        </div>
    );
}
 
export default Home;