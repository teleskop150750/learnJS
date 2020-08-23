(async () => {
  const { printResulp, printTasks } = await import('/scripts/index.js');

  const tasks = [
    {
      title: 'Вызвать alert',
      paragraphs: [
        'Создайте страницу, которая отобразит сообщение «Я JavaScript!».',
        'Выполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.',
      ],
      imgName: 1,
    },
  ];

  printTasks(tasks);

  printResulp('34', 0);
  printResulp('Пока', 2);
})();
