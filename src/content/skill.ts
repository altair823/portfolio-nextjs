interface Skill {
    name: string;
    level: number;
    experience: number | undefined;
    description: string | undefined;
}

const language = [
    {
        name: 'Java',
        level: 3,
    } as Skill,
    {
        name: 'Kotlin',
        level: 3,
    } as Skill,
    {
        name: 'C/C++',
        level: 4,
    } as Skill,
    {
        name: 'Rust',
        level: 4,
    } as Skill,
    {
        name: 'TypeScript',
        level: 2,
    } as Skill,
    {
        name: 'Python',
        level: 4,
    } as Skill,
    {
        name: 'Lua',
        level: 4,
    } as Skill,
];

const backendFramework = [
    {
        name: 'Spring Boot',
        level: 3,
        description: 'Spring Boot를 활용한 REST API 개발 경험 있음',
    } as Skill,
    {
        name: 'Nest.js',
        level: 2,
        description: 'NestJS를 활용한 사이드 프로젝트 경험 있음',
    } as Skill,
];

const frontendFramework = [
    {
        name: 'Next.js',
        level: 3,
        description: 'Next.js를 활용한 사이드 프로젝트 경험 있음',
    } as Skill,
];

const database = [
    {
        name: 'MySQL',
        level: 3,
    } as Skill,
    {
        name: 'MongoDB',
        level: 2,
    } as Skill,
];

const devOps = [
    {
        name: 'Docker',
        level: 3,
    } as Skill,
    {
        name: 'Github Actions',
        level: 3,
    }
];

const infrastructure = [
    {
        name: 'AWS',
        level: 3,
        description: 'VPC, EC2, S3, RDS Aurora Serverless V2, CodeDeploy 등 사용 경험',
    } as Skill,
    {
        name: 'Proxmox Virtual Environment',
        level: 5,
        description: 'Proxmox VE를 활용한 온프로미스 가상화 서버 구축 및 관리 경험 있음',
    }
];

