const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

let beforeword = "しりとり";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    input.value.length > 0 && beforeword.slice(-1) === input.value.charAt(0) &&
    input.value.match(/^[ぁ-ん]+$/)
  ) {
    document.querySelector("h1").innerText = input.value;
    beforeword = input.value;
    add();
    console.log(input.value);
  }
  if (input.value.slice(-1) === "ん") {
    alert("君の負け");
  }
  input.value = "";
});

function add() { //下に履歴を書く
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("list-gloup-item");
  ul.appendChild(li);
}

input.addEventListener("keyup", function () { //平仮名だけ入力
  if (this.value.match(/^[ぁ-ん]+$/)) {
    this.blur();
    this.focus();
  }
});

input.addEventListener("input", () => {
  const inputCheck = /\s+/g; // 空白の正規表現
  const value = input.value;
  input.value = value.replace(inputCheck, "");
});
