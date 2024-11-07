import { Avatar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../../components/title";
import { Colors } from "../../../utils/colors";
import styles from "./trustCompanies.module.css";
import { companies } from "../../../utils/companies";

const TrustCompanies = () => {
    const {t} = useTranslation("global");
    const avatarStyles = { 
        width: { tablet: 200, mobile: 175 }, 
        height: { tablet: 200, mobile: 175 }, 
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
                        <Typography> {company.name} </Typography>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TrustCompanies;