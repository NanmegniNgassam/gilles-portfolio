import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../../components/title";
import { FieldOfInterest } from "../../../utils/field";
import styles from "./fieldsSection.module.css";
import { motion } from "framer-motion";

const FieldsSection = () => {
    const {t} = useTranslation("global");
    const popInAnimation = {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: 1,
        }
    }

    return (
        <div className={styles.expertiseSection}>
            <Title 
                actualTitle={t("pages.home.container.titles.domains.main")}
                titleHook={t("pages.home.container.titles.domains.hook")}
                titleDescription={t("pages.home.container.titles.domains.description")}
            />
            <div className={styles.content}>
                {FieldOfInterest.map((field, index) => (
                    <Link key={index} to="/hire">
                        <Card 
                            variants={popInAnimation}
                            initial="hidden"
                            transition={{ delay: 0.2 * index }}
                            whileInView="visible"
                            sx={{ maxWidth: 400, minHeight: 390 }} 
                            component={motion.div}
                        >
                            <CardActionArea className="removeButtonOutline">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={field.imageUrl}
                                    alt={ t("general.domains." + field.title) }
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 500 }} component="div">
                                        { t("general.domains." + field.title) }
                                    </Typography>
                                    <Typography variant="body1" 
                                        sx={{ color: 'text.secondary', lineHeight: "150%", textAlign: "justify", textIndent: 50 }}
                                    >
                                        { t("general.description." + field.title) }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default FieldsSection;