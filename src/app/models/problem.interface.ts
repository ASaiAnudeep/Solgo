export interface CodingTrack {
    id: string;
    title: string;
    description: string;
    challenges: string;
}

export interface Problem {
    id: number;
    question: string;
    title: string;
    description: string;
    input: string;
    output: string;
}

export interface Solution {
    language: string;
    code: string;
}

export class CodingChallenge {
    title: string;
    problems: string;
}