import { Paper, AssessmentRunner } from "yoastseo";

export interface SEOAnalysisResult {
    keyword: string;
    scores: Record<string, unknown>;
}

export function analyzeSEO(content: string, keyword: string): SEOAnalysisResult {
    const paper = new Paper(content, { keyword });
    const assessor = new AssessmentRunner();
    const result = assessor.run(paper);

    return {
        keyword,
        scores: result,
    };
}
