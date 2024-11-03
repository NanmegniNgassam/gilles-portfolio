import styles from "./Title.module.css"
import { TitleWidgetProps } from "./Title.types";

const Title = (props: TitleWidgetProps) => {
    return (
        <div className={styles.titleContainer}>
            <span className={styles.titleHook}>{ props.titleHook }</span>
            <h2 className={styles.actualTitle}>
                { props.actualTitle }
            </h2>
            <p className={styles.titleDescription}>
                { props.titleDescription }
            </p>
        </div>
        
    );
}
 
export default Title;