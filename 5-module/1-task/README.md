# Функция highlight 

Напишите функцию highlight, которая для каждой строки tr таблицы:
- Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
- Проставит атрибут hidden, если такого атрибута нет вообще
- Проставит класс male/female, в зависимости от содержимого ячейки Gender
- Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18

```js
'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
}
```

Таблицу, которую нужно раскрашивать, можно посмотреть в файле index.html.

