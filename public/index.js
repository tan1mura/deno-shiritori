const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
c.width = 1920;
c.height = 650;

ctx.globalCompositeOperation = "source-over";

function loop() {
    ctx.fillStyle = "#19f";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#8b4513";
    ctx.fillRect(0, 500, c.width, c.height);
}


function draw_takashi() {
    let i = 0;
    i += 30;
    var takashi1 = new Image();
    takashi1.src="takashi1.png";
    takashi1.onload = function(){
        ctx.rotate(Math.PI / 180 * i);
        ctx.drawImage(takashi1, 300, 250, 150, 125);
    }
}

loop();
draw_takashi();



//---------------------------------------------------------------------------------------------------------------------------------------------------

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

let beforeword = "しりとり";

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (input.value.length > 0 && beforeword.slice(-1) === input.value.charAt(0) && input.value.match(/^[ぁ-ん]+$/) ){
        document.querySelector("h1").innerText = input.value;
        beforeword = input.value;
        add();
        console.log(input.value);
    }
    if (input.value.slice(-1) === "ん"){
        alert("君の負け");
    }
    input.value = "";
});

function add() {                                //下に履歴を書く
    const li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("list-gloup-item");
    ul.appendChild(li);
}

input.addEventListener("keyup", function () {   //平仮名だけ入力
    if( this.value.match(/^[ぁ-ん]+$/) ){
        this.blur();
        this.focus();
    }
});

input.addEventListener('input', () => {
    const inputCheck = /\s+/g // 空白の正規表現
    const value = input.value
    input.value = value.replace(inputCheck, '')
});