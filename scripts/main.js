//Construct DOM Factor
//function domAdd() {
//    console.log("Hello World!");
//}

const domAdd = () => {
    const btn1 = document.createElement("button");
    btn1.innerHTML = "확인1";
    btn1.id = "btn1";
    btn1.className = "btn"
    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "확인2";
    btn2.id = "btn2";
    btn2.className = "btn"
    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "확인3";
    btn3.id = "btn3";
    btn3.className = "btn"
    document.getElementById("content").append(btn3);


}

const domRead = () => {
    const btc = document.querySelectorAll(".btn");
    console.log(btc);

    console.log("for");
    for(let i=0; i < btc.length; i++) {
        console.log(btc[i]);
    }

    console.log("for in");
    for(let k in btc) {
        console.log(btc[k]);
    }

    console.log("foreach");
    btc.forEach((item, k) => {console.log(item, k)})

    console.log("for of");
    for(let [k, item] of btc.entries()) {
        console.log("key 인덱스: " + k, "내용: " + item.innerText);
        if(k==1) break;
    }
}

const domUpdate = () => {
    
    const div1 = document.querySelector("#div1");
    div1.innerHTML = "Updated this Element..."

    // const alertBtn1 = document.querySelector("#btn1");
    // alertBtn1.addEventListener("click", () => {
    //     // alert("위 텍스트를 '확인1'로 변경합니다.");
    //     div1.innerHTML = `<h2>${alertBtn1.innerHTML}</h2>`;
    // });

    // const alertBtn2 = document.querySelector("#btn2");
    // alertBtn2.addEventListener("click", () => {
    //     // alert("위 텍스트를 '확인2'로 변경합니다.");
    //     div1.innerHTML = `<h2>${alertBtn2.innerHTML}</h2>`;
    // });

    // const alertBtn3 = document.querySelector("#btn3");
    // alertBtn3.addEventListener("click", () => {
    //     //alert("위 텍스트를 '확인3'로 변경합니다.");
    //     div1.innerHTML = `<h2>${alertBtn3.innerHTML}</h2>`;
    // });

    const btcarr = document.querySelectorAll(".btn");
    // for(let i=0; i < btcarr.length; i++) {
    //     //alert(btcarr[i]);
    //     btcarr.addEventListener("click", () => {
    //         div1.innerHTML = `<h2>${btcarr.innerHTML}</h2>`;
    //     });
    // }

    for(let b of btcarr) {
        b.addEventListener("click", () => {
            div1.innerHTML = `<h2>${b.innerHTML}</h2>`;
        });
    }
    
}

/////////////////////////////////////////////////
// Dice Field
const addDiceButton =()=>{
    const btnDice = document.createElement("button");
    btnDice.innerHTML = "주사위 던지기";
    btnDice.id = "btn_dice1";
    btnDice.className = "btn btnDice"
    document.getElementById("dicebox").append(btnDice);
}
const throwDice =()=>{
    // 주사위 이미지
    const dices = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    const divDicebox = document.querySelector("#dice");
    const trDice = document.querySelector("#btn_dice1");
    
    
    trDice.addEventListener("click", ()=>{
        // Math.random(): 0~1 사이 난수
        // Math.floor(num): num 이하 가장 큰 정수(소수점 아래 내림)
        // dices 배열의 길이를 곱하고 내리면 dices 배열의 값 중 하나의 인덱스
        const importDices = dices[Math.floor(Math.random()*dices.length)];
    
        // add img element
        const dicesImg = document.querySelector(".dice_img");
        dicesImg.src = `주사위/${importDices}`; // 위에서 생성한 난수
        dicesImg.width = 100;
        // divDicebox.innerHTML = `<img src>`;
        // alert("hellow");
        divDicebox.append(dicesImg);
    });
}





/////////////////////////////////////////////////
// Number Play
const numberPlay =()=> {
    const dices = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
    const divDicebox = document.querySelector("#dice");
    const divOXbox = document.querySelector("#ox");
    const trDice = document.querySelector("#result");
    
   
     //const resultForm = numberForm.num;
     let resultForm = numberForm.num.value;
     console.log(resultForm+".png");
    
        //trDice.addEventListener("click", ()=>{ //trDice.addEventListener 클릭이 걸려있어서 클릭 횟수 만큼 반복 실행되는 오류가 있었다.
        const dicesImg = document.querySelector(".dice_img");
        dicesImg.width = 80;
        let importDices = "";
        for(let i=0; i<6; i++) {
            importDices = dices[Math.floor(Math.random()*dices.length)];
            //setTimeout(dicesImg.src = `주사위/${importDices}`,1000);// 시간지연
            dicesImg.src = `주사위/${importDices}`; // 위에서 생성한 난수
        }
        divDicebox.append(dicesImg);

        const answerImg = document.querySelector(".answer_img");
        dicesImg.width = 70;
        divOXbox.append(answerImg);


        console.log(importDices);
        console.log(dices)
        if(resultForm == "") {
            alert("예상 값을 입력해주세요!");
        } else if(resultForm+".png" == importDices) {
            alert("정답입니다!");
            answerImg.src = `주사위/o.png`;
        } else {
            alert("오답입니다!");
            answerImg.src = `주사위/x.png`;
        }
    //});
    // alert(diceNum);
   

    
    

}


/////////////////////////////////////////////////
// js rendering
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("docuTitle").innerHTML = "K-digital";

    //Construct DOM Factor
    // domAdd();
    // domRead();

    // domUpdate();

    // addDiceButton();
    // throwDice();

    //numberPlay();

});


