// function promiseAll(promises) {

// }

// const a = new Promise((res) => {
//   setTimeout(() => {
//     res(1)
//   }, 3000)
// })

// const b = new Promise((res) => {
//   setTimeout(() => {
//     res(2)
//   }, 1000)
// })

// const c = new Promise((res, reject) => {
//   setTimeout(() => {
//     reject(1)
//   }, 500)
// })

// const d = new Promise((res) => {
//   setTimeout(() => {
//     res(4)
//   }, 2000)
// })

// promiseAll([a, b, c, d]).then((res) => {
//   console.log(res) // [1, 2, null, 4]
// })


// for in 遍历为什么没有遍历
// 变量怎么判断有没有被定义（window.hasOwnProperty）
// 使用babel将es6转为es5，块级作用域怎么实现的

// function Foo() {
//   getName = function () {
//     console.log('1');
//   };
//   return this;
// }

// Foo.getName = function () {
//   console.log('2');
// };

// Foo.prototype.getName = function () {
//   console.log('3');
// };

// var getName = function () {
//   console.log('4');
// };


// function getName() {
//   console.log(5);
// }

// Foo.getName();  // 2
// // Foo().getName();
// getName();  // 4
// new Foo.getName();  // 2
// new Foo().getName();  // 1
// new new Foo().getName();  //  3

