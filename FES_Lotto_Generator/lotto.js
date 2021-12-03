function 로또번호뽑기(게임수) {
    let 로또번호집합 = [];
    for (let i = 1; i <= 게임수; i++) {
        let 로또번호목록 = new Set();
        while (로또번호목록.size < 6) {
            로또번호 = Math.floor(Math.random() * 44 + 1);
            로또번호목록.add(로또번호);
        }
        로또번호목록 = [...로또번호목록].sort((a, b) => a - b);
        로또번호집합.push(로또번호목록);
    }
    return 로또번호집합;
}

function 출력하기() {
    결과목록.innerHTML = "";
    const 게임수 = document.querySelector("#게임수").value;
    if (게임수 <= 0) {
        alert("안 살 거면 나가세요");
        return;
    } else if (게임수 > 100) {
        alert("이렇게 많이 사면 중독이에요");
        return;
    }
    const 결과 = 로또번호뽑기(게임수);

    결과.map((elem) => {
        const li = document.createElement("li");
        for (let i = 0; i < elem.length; i++) {
            const span = document.createElement("span");
            span.classList.add("result-num");
            if (elem[i] < 10) {
                span.classList.add("under10");
            } else if (elem[i] < 20) {
                span.classList.add("under20");
            } else if (elem[i] < 30) {
                span.classList.add("under30");
            } else if (elem[i] < 40) {
                span.classList.add("under40");
            } else {
                span.classList.add("under45");
            }
            span.innerHTML = elem[i];
            li.classList.add("result-list");
            li.append(span);
        }
        const 결과목록 = document.querySelector("#결과목록");
        결과목록.append(li);
    });
}

const 뽑기버튼 = document.querySelector("#뽑기");
뽑기버튼.addEventListener("click", (e) => {
    e.preventDefault();
    출력하기();
});
