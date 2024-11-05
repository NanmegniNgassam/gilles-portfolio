export enum SKILLS {
    MOBILE_DEVELOPMENT,
    WEB_DEVELOPMENT,
    UX_CONCEPTION,
    AI_TOOLS
}

export interface Skill {
    code: SKILLS;
    label: string
}

export const allSkills = [
    SKILLS.MOBILE_DEVELOPMENT, SKILLS.WEB_DEVELOPMENT, SKILLS.UX_CONCEPTION, SKILLS.AI_TOOLS
]

export const availableSkills: Skill[] = [
    {
        code: SKILLS.MOBILE_DEVELOPMENT,
        label: "mobileDev"
    },
    {
        code: SKILLS.WEB_DEVELOPMENT,
        label: "webDev"
    },
    {
        code: SKILLS.UX_CONCEPTION,
        label: "concepUX"
    },
    {
        code: SKILLS.AI_TOOLS,
        label: "aiTools"
    }
]