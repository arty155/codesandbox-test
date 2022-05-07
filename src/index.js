import "./styles.css";

// 追加
const onClickAdd = () => {
  // テキストボックス入力内容の処理
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  createInconpleteList(inputText);
};

// 未完了リストから指定要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incompleteList").removeChild(target);
};

// 未完了リストに追加する関数
const createInconpleteList = (text) => {
  // 未完了TODOエリアに配置するテキストタグの生成
  const li = document.createElement("li");
  li.className = "list-box";
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = text;

  // 未完了TODOエリアに配置するボタンタグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンの機能
    // 未完了リストから削除する
    deleteFromIncompleteList(completeButton.closest(".list-box"));
    // TODO内容テキスト取得
    const addTarget = completeButton.closest(".list-box");
    const textTarget = completeButton.parentNode;
    const text = textTarget.firstElementChild.innerText;

    // 初期化
    addTarget.textContent = null;

    //タグ生成
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo";
    p.innerText = text;
    addTarget.appendChild(div);
    div.appendChild(p);

    // 戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // 戻すボタン機能
    backButton.addEventListener("click", () => {
      // 戻すボタンによる削除
      const deleteTarget = backButton.closest(".list-box");
      document.getElementById("completeList").removeChild(deleteTarget);

      // 戻すボタンによるテキスト取得
      const textTarget = backButton.parentNode;
      const text = textTarget.firstElementChild.innerText;
      createInconpleteList(text);
    });
    div.appendChild(backButton);

    // 完了リストへ追加
    document.getElementById("completeList").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの機能
    deleteFromIncompleteList(deleteButton.closest(".list-box"));
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incompleteList").appendChild(li);
};
// 追加ボタン
document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
