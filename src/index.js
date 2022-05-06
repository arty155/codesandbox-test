import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = inputText;

  li.appendChild(div);
  div.appendChild(p);

  document.getElementById("incompleteList").appendChild(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
