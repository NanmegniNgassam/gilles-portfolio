import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Title from '../../../components/title';
import { technos } from '../../../utils/technos';
import styles from './techLanguages.module.css';
import { motion } from 'framer-motion';

const TechLanguages = () => {
    const {t} = useTranslation("global");
    return (
        <div className={styles.techContainer}>
            <Title 
                actualTitle={t("pages.home.container.titles.technos.main")}
                titleHook={t("pages.home.container.titles.technos.hook")}
                titleDescription={t("pages.home.container.titles.technos.description")}
            />
            <div className={styles.stackContainer}>
                {technos.map((techno, index) => (
                    <motion.div 
                        key={index} 
                        className={styles.stackRow}
                        variants={{ hidden: { x:(index%2 ? "-10vw" : "10vw" )  , opacity: 0 }, visible: {x: 0, opacity: 1} }}
                        transition={{ duration: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <span className={styles.title}> { t("pages.home.technos." + techno.name)} </span>
                        {techno.languages.map((language, key) => (
                            <Tooltip key={index+key} title={language.name} placement='top'>
                                <Link to={language.siteUrl} target='_blank'>
                                    <img className={styles.stackItem} src={language.imageUrl} alt={language.name} />
                                </Link>
                            </Tooltip>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
 
export default TechLanguages;