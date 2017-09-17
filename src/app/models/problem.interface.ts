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
    problemDetail: ProblemDetail;
}

export interface ProblemDetail {
    description: string;
    input: string;
    output: string;
    sampleInput: string;
    sampleOutput: string;
}

export interface Solution {
    language: string;
    code: string;
}

export class CodingChallenge {
    title: string;
    problems: string;
}