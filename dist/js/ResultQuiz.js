import { point } from './QuestionQuiz.js';
let elementResult = {
    progressCircle: document.querySelector(".progress-circle"),
    progressProgress: document.querySelector(".progress-progress"),
    CodeScore: document.querySelector(".CodeScore")
};
let { progressCircle, progressProgress, CodeScore } = elementResult;
let gradienCount = 0;
function styleProgress(progressStyle, progressValue) {
    let gradientInterval = setInterval(() => {
        gradienCount++;
        if (gradienCount == progressStyle) {
            clearInterval(gradientInterval);
        }
        ;
        console.log(gradienCount);
        progressCircle.style.background = `conic-gradient(rgba(201, 29, 180, 0.9411764706) ${gradienCount}deg, rgba(255, 255, 255, 0.1) 0deg)`;
    }, 5);
    progressProgress.textContent = `${progressValue}`;
    CodeScore.textContent = `Your Code Score ${point} out of 3`;
}
function CheckValueResult() {
    point == 0 ? styleProgress(3, "0%")
        : point == 1 ? styleProgress(120, "33%")
            : point == 2 ? styleProgress(240, "66%")
                : styleProgress(360, "100%");
}
CheckValueResult();
//# sourceMappingURL=ResultQuiz.js.map