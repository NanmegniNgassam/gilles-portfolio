import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Title from '../../../components/title';
import { technos } from '../../../utils/technos';
import styles from './techLanguages.module.css';

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
                    <div 
                        key={index} 
                        className={styles.stackRow}
                    >
                        <span className={styles.title}> { t("pages.home.technos." + techno.name)} </span>
                        {techno.languages.map((language, key) => (
                            <Tooltip key={index+key} title={language.name} placement='top'>
                                <Link to={language.siteUrl} target='_blank'>
                                    <img className={styles.stackItem} src={language.imageUrl} alt={language.name} />
                                </Link>
                            </Tooltip>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TechLanguages;