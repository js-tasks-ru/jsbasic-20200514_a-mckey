describe('3-module-5-task', () => {
  let arr;

  beforeEach(() => {
    arr = [5, 3, 8, 1];
  });

  it('должна фильтровать диапозон', () => {
    let actualFiltered = filterRange(arr, 1, 4);
    let expectedFiltered = [3, 1];

    expect(actualFiltered).toEqual(expectedFiltered);
  });

  it('не должна менят исходный массив', () => {
    let copyOfOriginalArr = [...arr];
    filterRange(arr, 1, 4);

    expect(arr).toEqual(copyOfOriginalArr);
  });
});
