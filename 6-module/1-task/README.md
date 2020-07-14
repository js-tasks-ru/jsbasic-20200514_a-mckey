# Компонент Очищаемая таблица (ClearedTable)

В модуле 5 мы делали сортируемую таблицу. Но часто нам нужно
предоставить пользователю таблицу, из которой он смог
бы удалять ненужные ему поля. Удалить поле значит:
 - удалить строку из таблицы
 - как-то сообщить вызывающему коду, что строка удалена

Пример структуры:
```js
let rows = [
    {
        id: 1,
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk'
    },
    {
        id: 2,
        name: 'Vasya',
        age: 14,
        salary: 1500,
        city: 'Moscow'
    }
];
```

Для успешного прохождения тестов, вам нужно поддержать следующую структуру в html:
```html
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
            <td></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ilia</td>
            <td>25</td>
            <td>1000</td>
            <td>Petrozavodsk</td>
            <td><a>X</a></td>
        </tr>
        ...
    </tbody>
</table>
```

Данный компонент предполагается использовать следующим образом:
```js
let table = new ClearedTable(rows);
document.querySelector('.result').appendChild(table.el);

table.onRemoved = function (id) {
    console.log(`Из таблицы удален пользователь ${id}`);
}
```
При клике на <a>X</a>, ожидается что строка будет удалена и метод *onRemoved*
будет вызван с идентификатором удаленного пользователя.

Для решения этой задачи рекомендуется почитать вот эту вот главу из учебника
http://learn.javascript.ru/behavior

PS для красоты я добавил стили [PureCss](https://purecss.io/). Для применениях их
к таблице, нужно к элементу table добавить класс "pure-table".
