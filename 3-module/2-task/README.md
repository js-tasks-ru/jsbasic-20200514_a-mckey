# Найти min/max в строке
```js
const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
	// ...
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
```

Функция должна возвращать результат в формате: 
```js
let result = {
    min: -5.8,
    max: 73
}
```


