import styles from "./notFound.module.css";
import gilles from "../../assets/images/Gilles.png";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const NotFound = () => {
    const { t } = useTranslation("global");

    useEffect(() => {
        document.title = 'Gilles NGASSAM | 404';
    }, [t]);

    return (
        <div className={styles.globalContainer}>
            <div className={styles.container}>
                <div className={styles.blob}>
                    <img src={gilles} className={styles.image} />
                    <span className={styles.pulse} data-delay="0"></span>
                    <span className={styles.pulse} data-delay="1"></span>
                    <span className={styles.pulse} data-delay="2"></span>
                    <span className={styles.pulse} data-delay="3"></span>
                </div>
                <div className={styles.content}>
                    <h1>404.</h1>
                    <p>{ t("pages.notFound.message") }</p>
                    <Stack flexDirection="row" justifyContent="center" sx={{ mt: 2 }}>
                        <Link to="/">
                            <Button className="removeButtonOutline">{ t("pages.notFound.backHome") }</Button>
                        </Link>
                        <Button className="removeButtonOutline" onClick={() => history.go(-1)}>{ t("pages.notFound.previousPage") }</Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;