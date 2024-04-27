var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const QuizElements = {
    answer: document.querySelectorAll(".quiz_answer"),
    question: document.querySelector(".quiz_question"),
    next: document.querySelector(".modal_button_next"),
    score: document.querySelector(".question_score"),
    currentQuestion: document.querySelector(".currentQuestion"),
};
let { answer, question, next, score, currentQuestion } = QuizElements;
let countTrueAnswer = 0, points = 0, targets, point = localStorage.getItem("points");
let FatchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch("../../public/api/data.json");
        const jsonData = yield data.json();
        return jsonData.questions;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw Error("Failed to fetch data");
    }
    ;
});
function initializeQuiz() {
    FatchData().then((data) => {
        getAnswer();
        NextQuestion(data);
        next.addEventListener("click", (e) => {
            checkAnswer(data);
            foundResult(data, e);
            NextQuestion(data);
        });
    });
}
;
function NextQuestion(data) {
    if (countTrueAnswer < data.length) {
        score.textContent = `Score: ${countTrueAnswer + 1} / 3`;
        currentQuestion.textContent = `${countTrueAnswer + 1} of ${data.length} question `;
        question.textContent = data[countTrueAnswer].question;
        for (let i = 0; i < data.length; i++) {
            answer[i].textContent = data[countTrueAnswer].options[i];
        }
        countTrueAnswer++;
    }
}
function getAnswer() {
    answer.forEach((answer) => {
        answer.addEventListener("click", (event) => {
            targets = event.target;
            checkAnswerColorChange();
        });
    });
}
let checkAnswer = (data) => {
    targets.textContent === data[countTrueAnswer - 1].correctAnswer ? points++ : null;
};
function checkAnswerColorChange() {
    answer.forEach((answer) => {
        answer.style.backgroundColor = "#03021a";
    });
    targets.style.backgroundColor = "#40bb1770";
}
;
function foundResult(data, e) {
    if (data.length === countTrueAnswer) {
        let LinkTarget = e.target;
        localStorage.setItem("points", points.toString());
        LinkTarget.href = "ResultQuiz.html";
    }
}
;
initializeQuiz();
export { point };
//# sourceMappingURL=QuestionQuiz.js.map