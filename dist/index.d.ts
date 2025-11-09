interface SEOAnalysisResult {
    keyword: string;
    scores: Record<string, unknown>;
}
declare function analyzeSEO(content: string, keyword: string): SEOAnalysisResult;

export { type SEOAnalysisResult, analyzeSEO };
