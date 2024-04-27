import { point } from './QuestionQuiz.js';

interface elementResultType {
    progressCircle: HTMLDivElement;
    progressProgress: HTMLDivElement;
    CodeScore: HTMLHeadingElement;
}

let elementResult: elementResultType = {
    progressCircle: document.querySelector(".progress-circle") as HTMLDivElement,
    progressProgress: document.querySelector(".progress-progress") as HTMLDivElement,
    CodeScore: document.querySelector(".CodeScore") as HTMLHeadingElement
}

const enum pointLevel {
    max = 2,
    middle = 1,
    min = 0,
}

let { progressCircle, progressProgress, CodeScore } = elementResult;

let gradienCount: number = 0;

function styleProgress(progressStyle: number, progressValue: string): void {

    let gradientInterval = setInterval(() => {
        gradienCount++;
        if (gradienCount == progressStyle) {
            clearInterval(gradientInterval);
        };
        console.log(gradienCount)
        progressCircle.style.background = `conic-gradient(rgba(201, 29, 180, 0.9411764706) ${gradienCount}deg, rgba(255, 255, 255, 0.1) 0deg)`;
    }, 5);

    progressProgress.textContent = `${progressValue}`;
    CodeScore.textContent = `Your Code Score ${point} out of 3`;
}

function CheckValueResult(): void {
    point == pointLevel.min ? styleProgress(3, "0%")
        : point == pointLevel.middle ? styleProgress(120, "33%")
            : point == pointLevel.max ? styleProgress(240, "66%")
                : styleProgress(360, "100%");
}

CheckValueResult();