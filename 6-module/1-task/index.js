/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    this.el.classList.toggle('pure-table');

    thead.innerHTML = `
             <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
                <td>City</td>
                <td></td>
             </tr>
        `;

    tbody.innerHTML = data.map((item) => {
      let row = '';

      for (const key in item) {
        if (key !== 'id') {
          row += `<td>${item[key]}</td>`;
        }
      }

      return `<tr>
            ${row}
            <td data-id="${item.id}"><a href="#delete">X</a></td>
        </tr>`;
    }).join('');

    this.el.appendChild(thead);
    this.el.appendChild(tbody);

    this.el.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    event.preventDefault();

    const tr = event.target.closest('tr');
    const id = tr.querySelector('[data-id]').getAttribute('data-id');

    tr.remove();

    this.onRemoved(parseInt(id, 10));
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
