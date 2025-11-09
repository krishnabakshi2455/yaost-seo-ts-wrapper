declare module "yoastseo" {
    export class Paper {
        constructor(text: string, options?: { keyword?: string });
    }

    export class AssessmentRunner {
        run(paper: Paper): any;
    }
}
