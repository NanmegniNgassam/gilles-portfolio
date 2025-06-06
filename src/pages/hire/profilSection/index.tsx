import styles from "./profilSection.module.css";
import gilles from "../../../assets/images/Gilles.png";
import { Avatar, Chip, Typography } from "@mui/material";
import { Colors } from "../../../utils/colors";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import { availableSkills } from "../../../utils/skills";
import { AddOutlined } from "@mui/icons-material";
import { ProfilSectionType } from "./ProfilSection.types";
import { useTranslation } from "react-i18next";

const ProfilSection = (props: ProfilSectionType) => {
    const { t } = useTranslation("global");
    
    return (
        <div className={styles.profilZone}>
            <div className={styles.profilZoneContainer}>
                <Avatar
                    src={gilles}
                    alt="Gilles NGASSAM"
                    sx={{ 
                        width: { laptop: 175, tablet: 150, mobile: 150 }, 
                        height: { laptop: 175, tablet: 150, mobile: 150 }, 
                        border: 1, 
                        borderColor: Colors.blackColor, 
                        boxShadow: `3px 2px 6px ${Colors.darkContrast}` 
                    }}
                />
                <div className={styles.skillsZone}>
                    <Typography variant="h5" className={styles.title}>Gilles NGASSAM</Typography>
                    {[...props.skills].length ? (
                        <span className={styles.tips}>
                            { t("pages.hire.profilSection.requiredSkills") }
                        </span>
                    ) : (
                        <span className={styles.tipsError}>
                            { t("pages.hire.profilSection.skillErrorLabel") }
                        </span>
                    )}
                    
                    <div className={styles.skills}>
                        {availableSkills.map((skill, key) => (
                            props.skills.has(skill.code) ?
                            (
                                <Chip 
                                    label={t("general.domains." + skill.label)} 
                                    color={"secondary"} 
                                    onDelete={() => props.removeSkill(skill.code)}
                                    onClick={() => props.removeSkill(skill.code)}
                                    deleteIcon={<CloseOutlined />}
                                    sx={{ borderRadius: 0.5, p: 1}}
                                    key={key}
                                    clickable
                                />
                            ) : (
                                <Chip 
                                    label={t("general.domains." + skill.label)} 
                                    color="secondary" 
                                    variant="outlined"
                                    onDelete={() => props.addSkill(skill.code)} 
                                    onClick={() => props.addSkill(skill.code)}
                                    deleteIcon={<AddOutlined />}
                                    sx={{ borderRadius: 0.5, p: 1}}
                                    key={key}
                                    clickable
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
            <Typography 
                fontSize={{ laptop: 20, tablet: 16, mobile: 14 }} 
                sx={{ textAlign: "center", fontFamily: "DosisMedium", color: Colors.darkContrast }} 
            >
                { t("pages.hire.profilSection.incentiveMessage") }
            </Typography>
        </div>
    );
}
 
export default ProfilSection;