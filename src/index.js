const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  createIncompleteList(inputText);
};

function deleteIncomplete(target) {
  const deleteTarget = target.parentNode;
  document.getElementById('incomplete-list').removeChild(deleteTarget);
}

function createIncompleteList(text) {
  // TODOのフレーム作成
  const li = document.createElement('li');
  li.classList.add('list-row');

  // TODOの項目名
  const div = document.createElement('div');
  div.innerText = text;

  // 完了ボタンを生成してイベントを登録
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    deleteIncomplete(completeButton);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const div = document.createElement('div');
    div.innerText = text;

    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(div);
    addTarget.appendChild(backButton);

    document.getElementById('complete-list').appendChild(addTarget);
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    deleteIncomplete(deleteButton);
  });

  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => {
  onClickAdd();
});
