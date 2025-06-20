export interface Job{
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: 'Software Engineer' | 'Junior Frontend Developer' | 'Junior Backend Developer'| 'Senior Frontend Developer' | 'Junior Developer' | 'Fullstack Developer' | 'Full Stack Engineer' | 'Front-end Dev';
    role: 'Frontend' | 'Backend' | 'Fullstack';
    level: 'Junior' | 'Midweight' | 'Senior';
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}