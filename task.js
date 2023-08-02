// Problem 2
// function avrg(a, b, c, d){
// const total = a+b+c+d
// console.log(total);
// var mark_avrg =(total / 4);
// console.log(mark_avrg);
// }
// avrg(10,20,30,40)
// console.log(avrg(10,20,30,40,50));
// problem 3
var items =[10,20,30,40]
const sum = items.reduce((a, b) => a + b, 0)
console.log(sum / 4);