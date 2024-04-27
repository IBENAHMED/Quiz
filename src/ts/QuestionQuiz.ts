interface QuizElements {
    answer: NodeListOf<HTMLLIElement>,
    question: HTMLHeadingElement,
    next: HTMLLinkElement,
    score: HTMLParagraphElement,
    currentQuestion: HTMLParagraphElement,
}

const QuizElements: QuizElements = {
    answer: document.querySelectorAll(".quiz_answer") as NodeListOf<HTMLLIElement>,
    question: document.querySelector(".quiz_question") as HTMLHeadingElement,
    next: document.querySelector(".modal_button_next") as HTMLLinkElement,
    score: document.querySelector(".question_score") as HTMLParagraphElement,
    currentQuestion: document.querySelector(".currentQuestion") as HTMLParagraphElement,
}

// variables
let { answer, question, next, score, currentQuestion } = QuizElements;

let countTrueAnswer: number = 0,
    points: number = 0,
    targets: HTMLLIElement,
    point: any = localStorage.getItem("points");

let FatchData: () => Promise<any> = async () => {
    try {
        const data = await fetch("../../public/api/data.json");
        const jsonData = await data.json();
        return jsonData.questions;

    } catch (error) {
        console.error("Error fetching data:", error);
        throw Error("Failed to fetch data");

    };
};

function initializeQuiz(): void {
    FatchData().then((data) => {
        getAnswer();
        NextQuestion(data);

        next.addEventListener("click", (e: MouseEvent) => {
            checkAnswer(data);
            foundResult(data, e);
            NextQuestion(data);
        });
    });
};

function NextQuestion(data: string | any[]): void {
    if (countTrueAnswer < data.length) {

        score.textContent = `Score: ${countTrueAnswer + 1} / 3`;
        currentQuestion.textContent = `${countTrueAnswer + 1} of ${data.length} question `;
        question.textContent = data[countTrueAnswer].question;

        for (let i: number = 0; i < data.length; i++) {
            answer[i].textContent = data[countTrueAnswer].options[i];
        }

        countTrueAnswer++;
    }
}

function getAnswer(): void {
    answer.forEach((answer) => {
        answer.addEventListener("click", (event) => {
            targets = event.target as HTMLLIElement;
            checkAnswerColorChange();
        });
    });
}

let checkAnswer = (data: string | any[]): void => {
    targets.textContent === data[countTrueAnswer - 1].correctAnswer ? points++ : null;
};

function checkAnswerColorChange(): void {
    answer.forEach((answer) => {
        answer.style.backgroundColor = "#03021a";
    })
    targets.style.backgroundColor = "#40bb1770";
};

function foundResult(data: string | any[], e: MouseEvent): void {
    if (data.length === countTrueAnswer) {
        let LinkTarget = e.target as HTMLLinkElement;
        localStorage.setItem("points", points.toString());
        LinkTarget.href = "ResultQuiz.html";
    }
};

initializeQuiz();
export { point };