import Title from "../../../components/title";
import styles from "./socialExperiences.module.css";
import image_1 from "../../../assets/images/1.png";
import junior from "../../../assets/images/junior.png";
import { Button, Card, CardContent, CardMedia, Stack } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AlarmOnOutlinedIcon from '@mui/icons-material/AlarmOnOutlined';
import { Link } from "react-router-dom";

const SocialExperiences = () => {
    return (
        <div className={styles.socialExperiencesContainer}>
            <Title
                actualTitle="Expériences sociales"
                titleHook="Associations"
                titleDescription="En dehors du développement et de mon parcours académique, j'effectue pas mal d'activités extra-scolaires et bénévoles. Afin de pouvoir progresser sur différents aspects."
            />
            <div className={styles.experiencesContainer}>
                <div className={styles.experienceContainer}>
                    <Card sx={{ maxWidth: 400, minHeight: 390, position: "relative" }} >
                        <div className={styles.experienceBanner}>
                            En Cours
                        </div>
                        <CardMedia
                            component="img"
                            height="200"
                            image={image_1}
                        />
                        <CardContent>
                            <div className={styles.titleSection}>
                                <h3> Responsable du pôle Etudes Junior UTBM </h3>
                                <img src={junior} />
                            </div>
                            Du 11/10/23 au 11/10/24 ou à maintenant. <br />
                            <AlarmOnOutlinedIcon /> : 1 an <LocationOnOutlinedIcon /> : Belfort, BFC, France <br />
                            <strong>Description.</strong> <br />
                            Petite description de l'expérience.
                            <br /><br />
                            <Stack sx={{ position: "relative", alignItems: "center" }}>
                                <Button sx={{ width: "fit-content" }}>En savoir plus</Button>
                                <Link to="https://junior.utbm.fr/" target="_blank"> 
                                    <div className={styles.moreButton}>
                                        <ArrowForwardOutlinedIcon sx={{ width: 25 }} />
                                    </div>
                                </Link>
                            </Stack>

                        </CardContent>
                    </Card >
                </div>
            </div>
        </div>
    );
}
 
export default SocialExperiences;