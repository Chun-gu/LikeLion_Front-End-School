function ViewManager(textManager, options) {
    if (
        !textManager ||
        !options.buttonElement ||
        !options.viewerElement ||
        !options.inputText
    ) {
        // throw Error: 사용자 정의 에러를 만들고 프로그램 종료
        throw Error("전달인자 중에 빈 값이 존재합니다.");
    }

    this.inputText = options.inputText;
    this.viewerElement = options.viewerElement;
    this.textManager = textManager;

    options.buttonElement.addEventListener("click", () => {
        this.changeValue();
    });
}

ViewManager.prototype.changeValue = function () {
    this.textManager.setValue({ data: this.inputText.value });
    this.updateView();
};

ViewManager.prototype.updateView = function () {
    this.viewerElement.textContent = this.textManager.getValue();
};
