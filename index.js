// Напишите функцию, которая вернет строку с именами студентов , у которых оценка больше 50

const students = [
  { name: "Alex", mark: "76" },
  { name: "John", mark: "50" },
  { name: "Max", mark: "30" },
  { name: "Dima", mark: "62" },
  { name: "Sam", mark: "97" },
];

const goodMarks = (arr=[]) => {
  const result=arr.map(item=>{
    if(item.mark>50){
      item=item.name
      return item
    }
  }).filter(item=>item).join(' ')

  return result
};