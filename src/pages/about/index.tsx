import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const {t} = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.about");
    }, [t]);
    
    return (
        <div>
            C'est ici que je parle de moi, de ma vie et de mes centres d'intérêts.
        </div>
    );
}
 
export default About;