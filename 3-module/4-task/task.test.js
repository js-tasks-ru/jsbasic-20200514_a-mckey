describe('3-module-4-task', () => {
  it('должна преобразовать users в массив имен', () => {
    let vasya = { name: 'Вася', age: 25 };
    let petya = { name: 'Петя', age: 30 };
    let masha = { name: 'Маша', age: 28 };

    let users = [vasya, petya, masha];
    let names = ['Вася', 'Петя', 'Маша'];

    expect(namify(users)).toEqual(names);
  });
});
