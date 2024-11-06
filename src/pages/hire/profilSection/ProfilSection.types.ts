import { SKILLS } from "../../../utils/skills";

export interface ProfilSectionType {
    skills: Set<SKILLS>,
    addSkill: (skill: SKILLS) => void;
    removeSkill: (skill: SKILLS) => void;
}