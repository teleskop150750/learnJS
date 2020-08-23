/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

'use strict';

(async () => {
  const { printResult, printTasks } = await import('/scripts/print.js');

  const tasks = [
    {
      title: 'Работа с переменными',
      paragraphs: [
        '1. Объявите две переменные: admin и name.',
        '2. Запишите строку "Джон" в переменную name.',
        '3. Скопируйте значение из переменной name в admin.',
        '4. Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).',
      ],
      preText: `  let admin;
  let name;
  name = 'Джон';
  admin = name;`,
    },
    {
      title: 'Придумайте правильные имена',
      paragraphs: [
        '1. Создайте переменную для названия нашей планеты. Как бы вы её назвали?',
        '2. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?',
      ],
      preText: `  const ourPlantetName = 'Земля';
  const currentUserName = 'Джон';`,
    },
    {
      title: 'Какие буквы (заглавные или строчные) использовать для имён констант?',
      paragraphs: [
        'У нас есть константа birthday, а также age, которая вычисляется при помощи некоторого кода, используя значение из birthday (в данном случае детали не имеют значения, поэтому код не рассматривается).',
        'Можно ли использовать заглавные буквы для имени birthday? А для age? Или одновременно для обеих переменных?',
      ],
      imgName: 0,
    },
  ];

  printTasks(tasks);

  let admin;
  let name;
  name = 'Джон';
  admin = name;

  printResult(admin, 0);

  const ourPlantetName = 'Земля';
  const currentUserName = 'Джон';

  printResult('BIRTHDAY', 2);
  printResult('age', 2);
})();
