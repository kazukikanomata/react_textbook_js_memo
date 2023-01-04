const onClickAdd = ()=>{

    // テキストボックスのelementを取得
    const textEl = document.getElementById("add-text");
    
    // テキストボックスの値を取得
    const text = textEl.value;
    
    // テキストボックスを空にする
    textEl.value = "";

    // liタグを生成する
    const li = document.createElement("li");

    // divタグを生成する
    const div = document.createElement("div");

    // pタグを作って生成する
    const p = document.createElement("p");
    p.textContent = text;

    // button タグを生成する
    const button = document.createElement("button");
    button.textContent = "削除";

    button.addEventListener("click", ()=> {
        const deleteTarget = button.closest("li");
        document.getElementById("memo-list").removeChild(deleteTarget);
    });

    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);

    document.getElementById("memo-list").appendChild(li);
};
document.getElementById("add-button").addEventListener("click", ()=> onClickAdd());