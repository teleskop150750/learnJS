(async () => {
  const { printResult, printTasks } = await import('/scripts/print.js');

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

  printResult('34', 0);
})();
