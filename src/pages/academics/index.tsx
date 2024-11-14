import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar } from "@mui/material";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AcademicCard from '../../components/academicCard';
import Skill from "../../components/skill";
import Title from "../../components/title";
import { academics } from '../../utils/interfaces';
import { formatDate } from '../../utils/relativeTime';
import styles from "./academics.module.css";


const MOBILE_MAX_WIDTH:number = 700;

const Academics = () => {
    const [t, translate] = useTranslation("global"); 
    interface Grade {
        title: string;
        /*
        An estimation of the skill represented as percentage
        As a percentage, it should be between 0 and 100 (both included) 
        */
        level: number;
    }
    
    const skills: Grade[] = [
        { level: 91, title: "Web development" },
        { level: 81, title: "Mobile Development" },
        { level: 83, title: "UX Design" },
        { level: 80, title: "Versioning, CI/CD, ..." },
        { level: 86, title: "Project Management" },
        { level: 67, title: "Artificial Intelligence" }
    ];

    useEffect(() => {
        document.title = 'Gilles NGASSAM | ' + t("Header.NavLinks.roadMap");
    }, [t]);

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      
        useEffect(() => {
          const handleResize = () => {
            setWindowDimensions({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          };
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        return windowDimensions;
    };
    
    return (
        <div className={styles.container}>
            <div>
                <Title 
                    actualTitle={t("pages.roadMap.titles.experience.main")}
                    titleHook={t("pages.roadMap.titles.experience.hook")}
                    titleDescription={t("pages.roadMap.titles.experience.description")}
                />
                {useWindowDimensions().width > MOBILE_MAX_WIDTH ? (
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                { t("general.keywords.nowIndicator") }
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="secondary" sx={{ width: 50, height: 50 }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '0px', px: 2, mt: 0.25 }}>
                                <Typography variant="h6" component="p" sx={{ maxWidth: '400px', fontSize: "1rem" }}>
                                    { t("pages.roadMap.timeline.lookingForInternship") }
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        {academics.map((academic, key) => (
                            <TimelineItem key={key}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    { formatDate(translate.language, academic.start) }
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <TimelineDot color="secondary">
                                            <Avatar src={academic.associationImage} />
                                        </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <AcademicCard academic={academic} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                        
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                { formatDate(translate.language, new Date("6/20/2020")) }
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                    <TimelineDot color="secondary">
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '20px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    { t("pages.roadMap.timeline.highSchoolDiploma") }
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                ) : (
                    <div className={styles.experiencesContainer}>
                        {academics.map((academic, key) => (
                            <AcademicCard completeCard academic={academic} key={key} />
                        ))}
                    </div>
                )}
                
            </div>
            <div>
                <Title 
                    actualTitle={t("pages.roadMap.titles.competences.main")}
                    titleHook={t("pages.roadMap.titles.competences.hook")}
                    titleDescription={t("pages.roadMap.titles.competences.description")}
                />
                <div className={styles.skillsContainer}>
                    {skills.map((skill, key) => (
                        <Skill skill={skill} key={key} />
                    ))}
                </div>
            </div>
        </div>
        
    );
}
 
export default Academics;