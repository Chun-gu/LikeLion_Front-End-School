const TextManager = (() => {
    // value에 원시값을 할당하면 TextManager의 인스턴스들은 value값을 복사해가므로
    // value의 주소를 공유해서 같은 값을 가질 수 있도록 value에 객체를 할당
    let value = { data: "Hello Lions!" };

    function innerTextManager() {}

    innerTextManager.prototype.getValue = function () {
        return value.data;
    };

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue;
    };

    return innerTextManager;
})();

const myInstance = new TextManager();
