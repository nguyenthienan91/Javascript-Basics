//1. toán tử điều kiện (Conditional Operator)

// let isLogged = true
// let check = isLogged ? "Hello user" : "do nothing"
// console.log(check);

//2. nullish coalescing và optional chaining
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
  occupation: 'Software Engineer',
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
  },
}
// person.address = null
// let x = person.address ?? 'undefiend ne'
// console.log(x);

// let address = person?.address
// console.log(address);

//3. toán tử kiểu (type operators)
// let home = 'long thanh my, quan 9'
// console.log(typeof home);
// const obj = {
//   name: 'an',
//   age: 21
// }
// console.log(obj instanceof Date);

//4. Mảng
const arr = [1, 2, 3, 4, 5]

// arr.push(6)
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.unshift(7)
// console.log(arr);
// arr.shift()
// console.log(arr);

//4.1 duyệt mảng
// for (const element of arr) {
//   console.log(element);
// }

// for (const key in arr) {
//   if (!Object.hasOwn(arr, key)) continue;
//   const element = arr[key];
//   console.log(key, element);
// }

// arr.forEach((value, index) => {
//   console.log(`Index: ${index}, Value: ${value}`)
// })

//4.2 biến đổi và lọc mảng
// const newArr = arr.map((x) => x * 4)
// console.log(newArr);

// arr.filter((x) => {
//   if(x % 2 === 0){
//     console.log(x);
//   }
// })

// const filterArr = arr.filter((x) => x % 2 === 0)
// console.log(filterArr);

//4.3 Tìm kiếm và kiểm tra

// const check = arr.find((x) => x === 2)
// console.log(arr.includes(6));
// console.log(arr.includes(3));

//4.4 gộp mảng

// const arr2 = [6, 7, 8, 9, 10]
// console.log(arr.concat(arr2))

// console.log(...arr, ...arr2)  //spread operator

//4.5 sắp xếp
// const arr3 = [8, 5, 3, 4, 99, 32, 16]
// console.log(arr3.sort((a, b) => a - b))
// console.log(arr3.sort((a, b) => b - a))
// const sum = arr3.reduce((acc,curr) => acc + curr, 0)
// console.log(sum);
// const product = arr3.reduce((acc,curr) => acc * curr, 1)
// console.log(product);

//5. Object
const student = {
  firstName: 'firstName',
  lastName: 'lastName',
  address: {
    city: 'HCM',
    street: 'Điện Biên Phủ',
  },
}
//5.1. shadow copy (chỉ copy được tầng đầu tiên của object,
//các field con khác vẫn sẽ tham chiếu đến object gốc)
// const student2 = Object.assign({}, student)
// console.log(student2);
//spread operator
// const student3 = {...student}
// console.log(student3);

//5.2. deep copy (copy toàn bộ object, tham chiếu độc lập, không làm ảnh hưởng đến object gốc)
// const student1 = JSON.parse(JSON.stringify(student))
// const student2 = structuredClone(student)
// console.log(student1);
// console.log(student2);

//6. Hàm
//6.1. cách khai báo hàm cũ (func)
// function greet(name) {
//   return `Hello ${name}`
// }
// console.log(greet('thien an'))
//6.2. hàm biểu thức (express funct)

// const greet2 = function (name, age) {
//   return `Hello ${name} with ${age} year old`
// }
// console.log(greet2("nguyen thien an", 21));

//6.3. hàm mũi tên (arrow function)
// const greet = (name) => `Hello ${name}`
// console.log(greet('thienandzpro'));

//6.4. hàm không trả về (void)  //ko dùng return thì hàm trả về undefiend
// function sayHello(){
//   console.log('hello');
// }
// sayHello()

//6.5. tham số mặc định của hàm
// function sayHello(name = 'khong co biet'){
//   console.log(`hello ${name}`);
// }
// sayHello()

//6.6. hàm ẩn danh (anonymous function)
// setTimeout(function () {
//   console.log('this is a mess')
// }, 1000)

//6.7. ESNext và các tính năng đáng chú ý
//6.7.1. tính năng đáng chú ý với mảng
const fruits = ['Apple', 'Orange', 'Mango']
// console.log(fruits.at());
// console.log(fruits.at(1));
// console.log(fruits.at(-1));

// const fruitsNew = fruits.with(1, 'Pear')
// console.log(fruits);
// console.log(fruitsNew);

//6.7.1.1 toSorted()
// const sortedFruits = fruits.sort()  //sài cách này cả 2 mảng (cũ và mới) đều bị thay đổi giá trị nè
// console.log(sortedFruits);
// console.log(fruits);
// const sortedFruits = fruits.toSorted()
// console.log(sortedFruits);
// console.log(fruits);

//6.7.1.2 toReversed()
const reversedFruits = fruits.toReversed()
console.log(reversedFruits)

//6.7.1.3 toSpliced()
const splicedFruits = fruits.toSpliced(2, 1, 'haha')
console.log(splicedFruits)
