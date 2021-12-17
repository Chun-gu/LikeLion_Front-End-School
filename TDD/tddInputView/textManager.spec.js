// textManager를 테스트하는 js파일
describe("텍스트 관리자입니다", () => {

    let textManager;

    // it 함수 호출 직전에 실행
    beforeEach(() => {
        textManager = new TextManager();
    });

    it("텍스트 값을 전달합니다", () => {
        const initValue = textManager.getValue();

        // textManager.getValue()의 값이 initValue와 같을 것으로 기대함
        expect(textManager.getValue()).toBe(initValue);
    });

    it("텍스트 값을 수정합니다", () => {
        const newText = { data: "Hello Zebras" };
        textManager.setValue(newText);

        expect(textManager.getValue()).toBe(newText.data);
    });
});
