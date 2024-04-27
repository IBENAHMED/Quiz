"use strict";
const ElementsHome = {
    buttonStartQuiz: document.querySelector(".start_quiz"),
    modal: document.querySelector(".modal"),
    modalExit: document.querySelector(".modal_button-close")
};
const { buttonStartQuiz, modal, modalExit } = ElementsHome;
function toggleModal() {
    modal.classList.toggle("hidden");
}
buttonStartQuiz.addEventListener("click", toggleModal);
modalExit.addEventListener("click", toggleModal);
//# sourceMappingURL=home.js.map