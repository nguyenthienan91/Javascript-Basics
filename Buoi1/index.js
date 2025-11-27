//1. khởi tạo biến
let firstName = 'thienan'
firstName = 'andzpro'

console.log('>>> ', firstName)
//2. kiểu dữ liệu
let name = 'an' //string
let age = 21 //number
let gender = true //boolean
let money = null //null
let family = undefined //undefiend
let myInfor = {
  //object
  name: 'thienan',
  age: 21,
}
let arr = ['an', 'nhan', 'luan', 'tuan']
console.log('>>> ', myInfor)
console.log('>>> ', arr)

//3. hàm thông dụng với String
// console.log(">>> length of string is", firstName.length)
// console.log(">>> upper string", firstName.toLocaleUpperCase())
// console.log(">>> concat string", firstName.concat('ne'))
// console.log(">>> value at index", firstName.at(1))
// console.log(">>> char at", firstName.charAt(0))
// console.log(">>> index of", firstName.indexOf("a"))

// let head = 'a'
// let tail = 'b'
// let headTail = `${head}${tail}`
// console.log(headTail)

//4. hàm thông dụng với số
const number = 91_000_000_000
console.log('>>> ', number)
console.log('number to string', number.toString())
console.log(typeof number)

//5. null && undefiend
// const value = null
// console.log('>>> value', value)
// let value
// console.log(value)

//6. Object
const person = {
  firstName: 'Nguyen',
  lastName: 'An',
  age: 21,
  isStudent: true,
  address: {
    street: '54 12D Long Thanh My',
    city: 'Ho Chi Minh city',
    zipCode: '12345',
  },
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
  },
}

// console.log(">>> object ", person);
console.log(person.firstName)
console.log(person['address'])
