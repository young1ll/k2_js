/*
// DomAdd
*/
const domAdd =()=> {
// domAdd Initialization
    // 시작 버튼 생성
    const startBtn = document.createElement("button");
    startBtn.innerHTML = "주사위 맞추기 시작";
    startBtn.id = "startBtn";
    startBtn.className = "btn"
    document.getElementById("mainBox").append(startBtn);
    document.getElementById("startBtn").onclick = OnGame;

    // 종료 버틑 생성
    const endBtn = document.createElement("button");
    endBtn.innerHTML = "종료!";
    endBtn.id = "endBtn";
    endBtn.className = "btn"
    document.getElementById("content").append(endBtn);
    document.getElementById("endBtn").onclick = OffGame;
    document.getElementById("endBtn").style.display = "none";
}
// 시작 클릭 시
const OnGame =()=> {
    document.getElementById("dicebox").style.display = "flex";
    document.getElementById("numberPlay").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("endBtn").style.display = "block";
}
// 종료 클릭 시
const OffGame =()=> {
    document.getElementById("dicebox").style.display = "none";
    document.getElementById("numberPlay").style.display = "none";
    document.getElementById("startBtn").style.display = "block";
    document.getElementById("endBtn").style.display = "none";
}

/*
// ThrowDiceFunc
*/
const numP1 =()=> {
    const dices = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    const divDicebox = document.querySelector("#dice");
    const divOXbox = document.querySelector("#ox");
    
    const trDice = document.querySelector("#result"); // 제출
    trDice.addEventListener("click", ()=>{
        let resultForm = numberForm.num.value; //Select HTML form name => resultForm
        console.log("선택한 번호 : "+resultForm+".png"); // print resultForm
        //console.log(resultForm);
        const dicesImg = document.querySelector(".dice_img");
        dicesImg.width = 80;
        let importDices = "";
        
        let delay = 0;
        for(let i=0; i<6; i++) {
            delay += 50;
            setTimeout(async ()=> { //setTimeout(code, delay)

                importDices = dices[Math.floor(Math.random()*dices.length)];
                dicesImg.src = `주사위/${importDices}`; // 위에서 생성한 난수
                divDicebox.append(dicesImg);
                console.log("주사위 이미지1 : "+importDices); // print importDices

            }, delay);// 시간지연
        }
        
        
        const answerImg = document.querySelector(".answer_img");
        dicesImg.width = 70;
        divOXbox.append(answerImg);
        setTimeout( ()=> {
            if(resultForm == "") {
                //alert("예상 값을 입력해주세요!");
                console.log("예상 값을 입력해주세요!");
            } else
            if(resultForm+".png" == importDices) {
                alert("정답입니다!");
                answerImg.src = `주사위/o.png`;
                console.log("정답입니다!");
            } else {
                alert("오답입니다!");
                console.log("오답입니다!");
                answerImg.src = `주사위/x.png`;
            }
        }, 600);
        
    });
}



/*
// js rendering
*/
document.addEventListener("DOMContentLoaded", () => { // Execute after DomContentLoaded 

    document.getElementById("docuTitle").innerHTML = "Dice Game";
    domAdd();
    numP1();

});

