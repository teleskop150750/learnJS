export const printResult = (result, i = 0) => {
  const tasks = document.querySelectorAll('.task');
  const div = document.createElement('div');
  div.classList.add('result');
  const span = document.createElement('span');
  span.classList.add('result__span');
  span.textContent = result;
  div.append(span);
  tasks[i].append(div);
};

export const printTasks = (arr) => {
  const { body } = document;
  body.classList.add('page__body');

  const sectionTasks = document.createElement('section');
  sectionTasks.classList.add('tasks');

  const h2 = document.createElement('h2');
  h2.textContent = 'Задания';
  h2.classList.add('tasks__title');
  sectionTasks.append(h2);

  arr.forEach(({
    imgName, preText,
  }) => {
    const divTask = document.createElement('div');
    divTask.classList.add('task');

    const img = document.createElement('img');
    img.src = `./images/${imgName}.png`;
    img.alt = imgName;

    let pre;
    if (preText) {
      pre = document.createElement('pre');
      pre.textContent = preText;
    }
    divTask.append(img);
    if (preText) {
      divTask.append(pre);
    }
    sectionTasks.append(divTask);
  });

  const a = document.createElement('a');
  a.textContent = 'Главная';
  a.href = '/index.html';
  a.classList.add('home-link');
  sectionTasks.append(a);
  body.append(sectionTasks);
};
