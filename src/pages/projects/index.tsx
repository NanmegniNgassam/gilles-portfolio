import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const {t} = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.projects");
    }, [t]);
    
    return (
        <div>
            See all my projects
        </div>
    );
}
 
export default Projects;