import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../../components/title";
import { Colors } from "../../../utils/colors";
import { companies } from "../../../utils/companies";
import styles from "./trustCompanies.module.css";

const TrustCompanies = () => {
    const {t} = useTranslation("global");
    const avatarStyles = { 
        width: { laptop: 180, tablet: 150, mobile: 120 }, 
        height: { laptop: 180, tablet: 150, mobile: 120 }, 
        border: 1, 
        borderColor: Colors.darkContrast,
        boxShadow: `3px 2px 6px ${Colors.darkContrast}`
    };


    return (
        <div className={styles.sectionContainer}>
            <Title 
                titleHook={t("pages.hire.companies.title.hook")}
                actualTitle={t("pages.hire.companies.title.main")}
                titleDescription={t("pages.hire.companies.title.description")}
            />
            <div className={styles.companiesContainer}>
                {companies.map((company, index) => (
                    <Link key={index} className={styles.companyContainer} to={company.linkedProject}>
                        <Avatar sx={avatarStyles} src={company.imageUrl} />
                        <p className={styles.label}> {company.name} </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TrustCompanies;