import { Stack } from "@mui/material";
import styles from "./skill.module.css";
import { Colors } from "../../utils/colors";

interface Grade {
    title: string;
    /*
    An estimation of the skill represented as percentage
    As a percentage, it should be between 0 and 100 (both included) 
    */
    level: number;
}

const Skill = ({skill }: {skill: Grade}) => {
    const { title, level} = skill;
    
    return (
        <Stack className={styles.container} gap={0.5}>
            <Stack flexDirection="row" justifyContent="space-between">
                <p className={styles.title}> {title} </p>
                <p className={styles.level}> {level} % </p>
            </Stack>
            <Stack sx={{ backgroundColor: Colors.contrast }}>
                <div className={styles.progress} style={{ width: `${level}%` }}></div>
            </Stack>
        </Stack>
    );
}
 
export default Skill;