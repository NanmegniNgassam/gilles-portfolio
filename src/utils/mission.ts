interface Recruiter {
    firstName: string;
    familyName?: string;
    company?: string;
    email?: string;
    phone?: string;
}

interface Mission {
    title: string;
    description?: string;
}

export interface MissionProposition {
    recruiter: Recruiter;
    mission: Mission;
}