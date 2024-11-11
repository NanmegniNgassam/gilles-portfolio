import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Academics = () => {
    const {t} = useTranslation("global"); 

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.roadMap");
    }, [t]);
    
    return (
        <div>Mon parcours académique</div>
    );
}
 
export default Academics;