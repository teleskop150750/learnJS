/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

'use strict';

(async () => {
  const { printResult, printTasks } = await import('/scripts/print.js');

  const tasks = [
    {
      imgName: 1,
    },
  ];

  printTasks(tasks);

  let name = 'Ilya';

  printResult(`hello ${1}`, 0);
  printResult(`hello ${'name'}`, 0);
  printResult(`hello ${name}`, 0);
})();
