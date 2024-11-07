import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import aitools from "../../assets/images/ai-tools.png";
import frontend from "../../assets/images/frontend.png";
import fullstack from "../../assets/images/backend.png";
import uxDesign from "../../assets/images/ux.jpg";
import Title from "../../components/title";
import styles from "./home.module.css";
import HeroSection from "./heroSection";
import TrustCompanies from "../components/trustCompanies";
import FieldsSection from "./fieldsSection";

const Home = () => {
    const {t} = useTranslation("global");
    useEffect(() => {
        document.title = 'Gilles NGASSAM | landing'
    }, [])

    return (
        <div>
            <HeroSection />
            <div className={styles.mainContainer}>
                <FieldsSection />
                <div className="expertiseSection">
                    <Title 
                        actualTitle={t("pages.home.container.titles.domains.main")}
                        titleHook={t("pages.home.container.titles.domains.hook")}
                        titleDescription={t("pages.home.container.titles.domains.description")}
                    />
                    <div className={styles.content}>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={uxDesign}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        UX-UI Design
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={fullstack}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Web Development
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={frontend}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mobile Development
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                        <Link to="/hire">
                            <Card sx={{ maxWidth: 345 }} >
                                <CardActionArea className="removeButtonOutline">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={aitools}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        AI assistant tools
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                    <Title 
                        actualTitle={"Education & stages"}
                        titleHook={"Experiences"}
                        titleDescription={t("pages.home.container.titles.domains.description")}
                    />
                </div>
                <TrustCompanies />
            </div>
        </div>
    );
}
 
export default Home;