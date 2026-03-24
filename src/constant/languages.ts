interface SkillsProp {
    language: string,
    level: number,
    skills: string[]

}

export const skills:SkillsProp[] = [
    {
        language: 'React / Next.js Architecture',
        level: 98,
        skills: ["Server Components", "SSR/ISR optimization", "Custom Hooks"]
    },

    {
        language: 'TypeScript / System Design',
        level: 95,
        skills: ["Type safety", "Interface Design", "Utility Patterns"]
    },

    {
        language: 'State Management (Zustand/Redux-Toolkit)',
        level: 92,
        skills: ["Atomic state", "middleware integration", "persistence"]
    },
]