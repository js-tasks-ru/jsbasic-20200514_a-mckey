describe('1-module-2-task', () => {
  it('если имя корректное то true', () => {
    expect(isValid('Ilia')).toEqual(true);
  });

  it('если содержит пробелы, то false', () => {
    expect(isValid('Ilia Burlak')).toEqual(false);
  });

  it('если меньше 4 симовлов то false', () => {
    expect(isValid('Ili')).toEqual(false);
  });

  it('если вызываем не передавая ничего, то должен вернуть false', () => {
    expect(isValid()).toEqual(false);
  });
});
