export enum SKILLS {
    WEB_DEVELOPMENT,
    MOBILE_DEVELOPMENT,
    UX_CONCEPTION,
    AI_TOOLS
}

export interface Skill {
    code: SKILLS;
    label: string
}

export const allSkills = [
    SKILLS.MOBILE_DEVELOPMENT, SKILLS.WEB_DEVELOPMENT, SKILLS.UX_CONCEPTION, SKILLS.AI_TOOLS
];

export const defaultSkills = [
    SKILLS.WEB_DEVELOPMENT, SKILLS.MOBILE_DEVELOPMENT
]

export const availableSkills: Skill[] = [
    {
        code: SKILLS.WEB_DEVELOPMENT,
        label: "webDev"
    },
    {
        code: SKILLS.MOBILE_DEVELOPMENT,
        label: "mobileDev"
    },
    {
        code: SKILLS.UX_CONCEPTION,
        label: "concepUX"
    },
    {
        code: SKILLS.AI_TOOLS,
        label: "aiTools"
    }
];

export const getListingFromList = (list: string[]): string => {
    return list.map((item, index, list) => {
        if(index === 0) {
            // First skill formatting
            return (` ${item}`)
        } else if(index === (list.length - 1)) {
            // Last skill formatting
            return (` et ${item}`)
        } else {
            return (`, ${item}`)
        }
    }).join("");
}