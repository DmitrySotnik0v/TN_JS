// Напишите функцию,которая ожидает массив элементов в качестве первого аргумента , и перемещает все нули в конец массива

const moveZeros = (arr ) => {
  const arrZero = [];

  const arrFilter = arr.filter((item) => {
    if (item === 0) {
      arrZero.push(item);
    }
    return item !== 0;
  });

  return arrFilter.concat(arrZero);
};