import styles from "./Title.module.css"
import { TitleWidgetProps } from "./Title.types";
import { motion } from "framer-motion";

const Title = (props: TitleWidgetProps) => {
    const slideInVariants = {
        hidden: {
            opacity: 0,
            x: "-50vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75
            }
        }
    }

    return (
        <motion.div 
            className={styles.titleContainer}
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <span className={styles.titleHook}>{ props.titleHook }</span>
            <h2 className={styles.actualTitle}>
                { props.actualTitle }
            </h2>
            <p className={styles.titleDescription}>
                { props.titleDescription }
            </p>
            {props.furtherDescription && (
                (
                    <p className={styles.titleDescription}>
                        { props.furtherDescription }
                    </p>
                )
            )}
        </motion.div>
        
    );
}
 
export default Title;