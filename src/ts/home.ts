interface ElementsHomeType {
    buttonStartQuiz: HTMLLinkElement;
    modal: HTMLDivElement;
    modalExit: HTMLButtonElement;
}

const ElementsHome: ElementsHomeType = {
    buttonStartQuiz: document.querySelector(".start_quiz") as HTMLLinkElement,
    modal: document.querySelector(".modal") as HTMLDivElement,
    modalExit: document.querySelector(".modal_button-close") as HTMLButtonElement
}

const { buttonStartQuiz, modal, modalExit } = ElementsHome;


function toggleModal(): void {
    modal.classList.toggle("hidden");
}

buttonStartQuiz.addEventListener("click", toggleModal);
modalExit.addEventListener("click", toggleModal);