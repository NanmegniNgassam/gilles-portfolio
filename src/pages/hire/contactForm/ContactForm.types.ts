import { SKILLS } from "../../../utils/skills";

export interface ContactFormType {
    skills: Set<SKILLS>,
    setDefaultSkills: () => void;
}