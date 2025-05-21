let submit = document.getElementById('submit');
let add = document.getElementById('add');
let todo = document.getElementById('todo');
let done = document.getElementById('done');
let list = [];

submit.addEventListener('click', () => {
  if (add.value.trim() !== '') {
    const task = add.value.trim();
    list.push(task);

    const li = document.createElement('li');
    li.id = list.length - 1;

    const btn = document.createElement('button');
    btn.textContent = task;
    btn.onclick = function () {
      complete(parseInt(li.id));
    };

    li.appendChild(btn);
    todo.appendChild(li);

    add.value = '';
  }
});

function complete(id) {
  const li = document.createElement('li');
  li.textContent = list[id];
  done.appendChild(li);

  const taskItem = document.getElementById(id);
  if (taskItem) taskItem.style.display = 'none';
}
