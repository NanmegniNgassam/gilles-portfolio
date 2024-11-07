import { Avatar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bioGusta from "../../../assets/images/bio-gusta.jpg";
import dek from "../../../assets/images/dek.jpg";
import juniorUTBM from "../../../assets/images/junior.png";
import nehtek from "../../../assets/images/nehtek.jpg";
import sjd from "../../../assets/images/sjd.png";
import Title from "../../../components/title";
import { Colors } from "../../../utils/colors";
import styles from "./trustCompanies.module.css";

const TrustCompanies = () => {
    const {t} = useTranslation("global");
    const avatarStyles = { 
        width: { tablet: 200, mobile: 175 }, 
        height: { tablet: 200, mobile: 175 }, 
        border: 1, 
        borderColor: Colors.darkContrast,
        boxShadow: `3px 2px 6px ${Colors.darkContrast}`,
        '&hover': {
            boxShadow: 'none'
        },
    }

    return (
        <div className={styles.sectionContainer}>
            <Title 
                titleHook={t("pages.hire.companies.title.hook")}
                actualTitle={t("pages.hire.companies.title.main")}
                titleDescription={t("pages.hire.companies.title.description")}
            />
            <div className={styles.companiesContainer}>
                <Link className={styles.companyContainer} to="/projects">
                    <Avatar sx={avatarStyles} src={bioGusta} />
                    <Typography>Terroir d'afrique</Typography>
                </Link>
                <Link className={styles.companyContainer} to="/projects">
                    <Avatar sx={avatarStyles} src={sjd} />
                    <Typography>Saint Jérôme Douala</Typography>
                </Link>
                <Link className={styles.companyContainer} to="/projects">
                    <Avatar sx={avatarStyles} src={juniorUTBM} />
                    <Typography>Junior UTBM</Typography>
                </Link>
                <Link className={styles.companyContainer} to="/projects">
                    <Avatar sx={avatarStyles} src={nehtek} />
                    <Typography>NEHTEK</Typography>
                </Link>
                <Link className={styles.companyContainer} to="/projects">
                    <Avatar sx={avatarStyles} src={dek} />
                    <Typography>DEK Construction</Typography>
                </Link>
            </div>
        </div>
    );
}
 
export default TrustCompanies;