//Напишите функцию , которая возвращает массив уникальных элементов 

const arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5];

const uniqValues = () => {
  return [...new Set(arr).values()];
};