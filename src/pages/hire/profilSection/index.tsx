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
            <Avatar
                src={gilles}
                alt="Gilles NGASSAM"
                sx={{ width: 250, height: 250, border: 1, borderColor: Colors.blackColor, boxShadow: "3px 2px 6px #707070" }}
            />
            <div className={styles.skillsZone}>
                <Typography variant="h5" className={styles.title}>Gilles NGASSAM</Typography>
                {props.skills.length ? (
                    <span className={styles.tips}>Compétences requises</span>
                ) : (
                    <span className={styles.tipsError}>Veuillez selectionner au moins une compétences</span>
                )}
                
                <div className={styles.skills}>
                    {availableSkills.map((skill, key) => (
                        props.skills.includes(skill.code) ?
                        (
                            <Chip 
                                label={t("general.domains." + skill.label)} 
                                color="secondary" 
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
                                sx={{ borderRadius: 0.5, p: 1, border: 2}}
                                key={key}
                                clickable
                            />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default ProfilSection;