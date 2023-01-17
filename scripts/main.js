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

/////////////////////////////////////////////////
// js rendering
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("docuTitle").innerHTML = "K-digital";

    //Construct DOM Factor
    domAdd();
    domRead();

});


