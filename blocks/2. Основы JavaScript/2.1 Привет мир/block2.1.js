'use strict';

(async () => {
  const { printResult, printTasks } = await import('/scripts/print.js');

  const tasks = [
    {
      title: 'Вызвать alert',
      paragraphs: [
        'Создайте страницу, которая отобразит сообщение «Я JavaScript!».',
        'Выполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.',
      ],
    },
    {
      title: 'Покажите сообщение с помощью внешнего скрипта',
      paragraphs: [
        'Возьмите решение предыдущей задачи Вызвать alert, и измените его.',
        'Извлеките содержимое скрипта во внешний файл alert.js, лежащий в той же папке.',
      ],
    },
  ];

  printTasks(tasks);

  printResult('Я JavaScript!', 1);
})();
