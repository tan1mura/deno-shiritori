const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
let beforeword = "しりとり";

$.ajax({
  type: "GET",
  url: "./test.json", // ファイルパス（相対パス）
  dataType: "json", // ファイル形式
  async: false, // 非同期通信フラグ
}).then(
  function (json) {
    // 読み込み成功時の処理
    console.log("読み込みに成功しました");
    json.forEach(function (data) {
      let data_stringify = JSON.stringify(data);
      let data_json = JSON.parse(data_stringify);
      //jsonデータから各データを取得
    });
  },
  function () {
    // 読み込み失敗時の処理
    console.log("読み込みに失敗しました");
  },
);
// console.log(jsonData);

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
    window.location.reload();
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
