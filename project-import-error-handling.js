/* Этот скрипт призван отлавливать ошибки подключения модулей,
и оповещать студентов о том, что код задачи не подключен
*/

(function () {
  let pageUrlMap = [
    {
      taskName: '6-module-2-task',
      taskNameDisplay: '2-ая задача из 6-ого занятия'
    },
    {
      taskName: '6-module-3-task',
      taskNameDisplay: '3-ая задача из 6-ого занятия'
    },
    {
      taskName: '8-module-1-task',
      taskNameDisplay: '1-ая задача из 8-ого занятия'
    },
    {
      taskName: '9-module-1-task',
      taskNameDisplay: '1-ая задача из 9-ого занятия'
    }
  ];

  window.addEventListener('error', onWindowError, true);

  function onWindowError(error) {
    if (!isScriptLoadError(error)) {
      return;
    }

    let scriptSrc = error.target.src;
    for (let i = 0; i < pageUrlMap.length; i++) {
      let task = pageUrlMap[i];

      if (scriptSrc.includes(task.taskName)) {
        showImportWarningForTask(task);

        break;
      }
    }
  }

  function isScriptLoadError(error) {
    return error && error.target && error.target.tagName === 'SCRIPT';
  }

  function showImportWarningForTask(task) {
    let message = `В ваш задачник не добавлена: ${task.taskNameDisplay}`;

    console.warn(message);
  }

})();
