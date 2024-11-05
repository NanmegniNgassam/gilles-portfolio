import { SKILLS } from "../../../utils/skills";

export interface ProfilSectionType {
    skills: SKILLS[],
    addSkill: (skill: SKILLS) => void;
    removeSkill: (skill: SKILLS) => void;
}