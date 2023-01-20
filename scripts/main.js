
/////////////////////////////////////////////////
// ThrowDiceFunc
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





// Number Play => Execute by OnClick in HTML
const numberPlay =()=> {
    const dices = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    const divDicebox = document.querySelector("#dice");
    const divOXbox = document.querySelector("#ox");
    const trDice = document.querySelector("#result");
    let resultForm = numberForm.num.value; //Select HTML form name => resultForm
    console.log("선택한 번호 : "+resultForm+".png"); // print resultForm
    //trDice.addEventListener("click", ()=>{ //trDice.addEventListener 클릭이 걸려있어서 클릭 횟수 만큼 반복 실행되는 오류가 있었다.
    const dicesImg = document.querySelector(".dice_img");
    dicesImg.width = 80;
    let importDices = "";


    let delay = 0;
    for(let i=0; i<6; i++) {
        delay += 50;
        setTimeout(async ()=> {
            importDices = dices[Math.floor(Math.random()*dices.length)];
            dicesImg.src = `주사위/${importDices}`; // 위에서 생성한 난수
            divDicebox.append(dicesImg);
            console.log("주사위 이미지1 : "+importDices); // print importDices
        }, delay);// 시간지연
    }
    importDices = dices[Math.floor(Math.random()*dices.length)];
    divDicebox.append(dicesImg);
    console.log("주사위 이미지2 : "+importDices); // print importDices

    const answerImg = document.querySelector(".answer_img");
    dicesImg.width = 70;
    divOXbox.append(answerImg);


    
    //console.log(dices) // print dices
    //console.log("주사위 이미지 : "+importDices); // print importDices
    // Compare resultForm and importDices
    if(resultForm == "") {
        //alert("예상 값을 입력해주세요!");
        console.log("예상 값을 입력해주세요!");
    } else if(resultForm+".png" == importDices) {
        //alert("정답입니다!");
        answerImg.src = `주사위/o.png`;
        console.log("정답입니다!");
    } else {
        //alert("오답입니다!");
        console.log("오답입니다!");
        answerImg.src = `주사위/x.png`;
    }

}





/////////////////////////////////////////////////
// js rendering
document.addEventListener("DOMContentLoaded", () => { // Execute after DomContentLoaded 

    document.getElementById("docuTitle").innerHTML = "Dice Game";

    numP1();
    //numP2();

});

