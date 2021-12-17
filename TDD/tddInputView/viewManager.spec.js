describe("클릭 이벤트 처리 및 뷰를 담당하는 함수입니다.", () => {
    // dependency injection (의존성 주입)
    let textManager, buttonElement, viewerElement, inputText, viewManager;
    beforeEach(() => {
        textManager = new TextManager();
        viewerElement = document.createElement("strong");
        buttonElement = document.createElement("button");
        inputText = document.createElement("input");
        viewManager = new ViewManager(textManager, {
            buttonElement,
            viewerElement,
            inputText,
        });
    });

    it("viewManager에 인자가 잘 전달됐는지 확인합니다.", () => {
        const textManager = null;
        const buttonElement = null;
        const viewerElement = null;
        const inputText = null;

        // 인자가 전달되는지 확인하는 함수
        const actual = () =>
            new ViewManager(textManager, {
                buttonElement,
                viewerElement,
                inputText,
            });

        // actual에는 값이 아니라 실행할 수 있는 함수가 전달되어야 한다.
        expect(actual).toThrowError();
    });

    it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
        // spyOn: 특정한 모듈의 함수를 감시
        spyOn(viewManager, "changeValue");
        buttonElement.click();
        // toHaveBeenCalled: 함수가 호출이 된 적이 있는지 확인
        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it("updateView 함수를 실행합니다.", () => {
        // spyOn: 특정한 모듈의 함수를 감시
        spyOn(viewManager, "updateView");
        viewManager.changeValue();
        // toHaveBeenCalled: 함수가 호출이 된 적이 있는지 확인
        expect(viewManager.updateView).toHaveBeenCalled();
    });
});
