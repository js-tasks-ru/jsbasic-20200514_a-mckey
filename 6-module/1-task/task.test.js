describe('6-module-1-task', () => {
  it('проверям удаление строки', () => {
    const table = new ClearedTable([{
      id: 1,
      name: 'Ilia',
      age: 25,
      salary: '1000',
      city: 'Petrozavodsk',
    }]);

    table.el.querySelector('a').dispatchEvent(new Event('click', { bubbles: true }));
    expect(table.el.querySelectorAll('tbody tr').length).toEqual(0);
  });

  it('проверяем, что клик работает только по <a>', () => {
    const table = new ClearedTable([{
      id: 1,
      name: 'Ilia',
      age: 25,
      salary: '1000',
      city: 'Petrozavodsk',
    }]);

    table.el.querySelector('tbody tr').dispatchEvent(new Event('click', { bubbles: true }));
    expect(table.el.querySelectorAll('tbody tr').length).toEqual(1);
  });

  it('проверяем, что при удалении, передаются данные об удаляемом объекте в метод onRemoved', () => {
    const info = {
      id: 1,
      name: 'Ilia',
      age: 25,
      salary: '1000',
      city: 'Petrozavodsk',
    };

    const table = new ClearedTable([info]);

    spyOn(table, 'onRemoved');
    table.el.querySelector('a').dispatchEvent(new Event('click', { bubbles: true }));

    expect(table.onRemoved).toHaveBeenCalled();
    expect(table.onRemoved).toHaveBeenCalledWith(1);
  });
});
