// alert("hello nitesh")

// let x = 10;

// console.log(x)
// x = 200 
// console.log(x)
// console.log(typeof x)

// let x = 20
//  let y = 30
//  let z = " "
//   x = 40
//   console.log(x + z + y)

// let name = `Ashok`
// let surname = "Kumawat"
// const username = `Hey , my name is " ${name}` + " " +surname
// console.log(username)

// let a = 10
//  console.log(a == b)

// let iceCream = Number(prompt("type a number"))

// if(iceCream <= 10) {
//     console.log("Ice-Cream is blue Lagoon")
// }
// else if(iceCream => 30) {
//     console.log("Ice-Cream is Cone")
// }
// let iceCream = prompt("you write something");
// switch (iceCream) {
//     case 10:
//         console.log("will you drive")
//         break;
//     case 30:
//         console.log("yes, i will driving")    
//         break;

//     default:
//         console.log("something went wrong")
//         break;
// }

// const cars = [
//     'saab',
//     'volvo',
//     'BMW'
// ]
// console.log(cars)

// const cars = ['saaab', 'volvo', 'bmw']
// let car = cars[0]

// const fruits = ['banana','orange','apple','mango']
// fruits.toString()

// console.log("hello world")

// let fruits  = ['apple', 'orange','plum']
// alert(fruits.length)

// let fruits = ['Apple', 'Orange', 'Plum']
// alert( fruits)

// let fruits = ['Apple', 'Orange', "Plum"]
// fruits.push("orange", "peach")
// fruits.unshift("Pineapple", "Lemon")
// alert(fruits.unshift("Apple"))
// alert(fruits.shift())
// fruits.push("pear")
// alert(fruits.pop())
// alert(fruits)
// alert( fruits.at(-2))
// alert(fruits[2])

// let fruits = ["Banana"]
// let arr = fruits
// alert( arr === fruits)
// arr.push('Pear')
// alert( fruits )

// let fruits = []
// fruits[9999] = 5;
// fruits.age = 25
// alert(age)

// let arr = ["apple", 'Orange','Pear','papaya']
// for (let i =0; i< arr.length; i++) {
//     alert(arr[i])
// }

// let fruits = ["Apple", "Orange", "Plum"]
// for( let fruit of fruits) {
//     alert( fruit)
// }

// let arr = [1,2,3,4,5]
//  arr.length = 3;
//  alert(arr)

//  arr.length = 5;
//  alert(arr[3]) 

// let arr = ["Apple", "Orange", 'pear']
// for (let key in arr) {
//     alert(arr[key])
// }

// let fruits = []
//  fruits[123] = "Apple"
//  alert ( fruits.length)

// let arr = [1,2,3,4,5]
// alert(arr[6])

// let arr = new Array(2)
// alert (arr[0])
// alert( arr.length )

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
//  alert( matrix[1] [0])

// let arr = [1, 2 ,3]
// alert (arr)
// alert( String(arr) === '1,2,3')

// alert ( [] + 1)
// alert( [1] + 1)
// alert([1,2] + 1)

// alert( "" + 1)
// alert("1" + 1)
// alert("1,2" + 1)

// alert ( [] == []) //false
// alert( [0] == [0]) //false

// alert ( 0 == []) // true
// alert( '0'== []) //false

// alert ( 0 == '') //true 
// alert( '0'  == '') //false
// alert('0' == '0') //true
// alert('0' ==='0') //true
// alert( 0 === '')  //false


// let fruits = ["Apples", "Pear", "Orange"]

// let shoppingCart = fruits;
// shoppingCart.push("Banana")
// alert(fruits.length)

// let arr = ["a" , "b"]
// arr.push(function() {
//     alert( this)
// })
// arr[2] ();


// let arr = ["I", "Go", "Home"]
// let ashokk = arr
//  let ashok = delete arr[2]
//  alert( arr[2])
//  alert (arr.length)
//  alert(ashokk[1])

// let arr = ["I", "Study","currently","On", "Javascript"]
// arr.splice( 2,2)
// alert(arr)

// let arr = ["I", "Study","currently","On", "Javascript"]
// arr.splice( 2,1) // first value indicate of the index number and  start element remove
// alert(arr)

// let arr = ["I", "Study", "Javascript", "Right","Now"]
//  arr.splice( 0, 3, "Let's","Dance")

//  alert( arr)

// let arr = ["I", "Study", "Javascript", "right", "Now"]

// let removed = arr.splice(0,2)
// alert(removed)

// let arr = ['I','Study', 'Javascript']
// arr.splice( 2, 0, "complex", "Language")
// console.log(arr)




// let arr = [1,2,5]
// arr.splice(-1,0,3,4)
// console.log(arr)





// let arr = ["t", "e", "s" , "t"]
// alert(arr.slice(1,4))
// alert(arr.slice(-2))


// let arr = [1, 2]
// let arrayLike = {
//     0: "something",
//     length: 1
// };
//  alert( arr.concat(arrayLike))

// let arr = [1,2]
// let arrayLike = {
//     0: "something",
//     1: "else",
// [Symbol.isConcatSpreadable]: true,
// length: 2
// };
// alert( arr.concat(arrayLike))


// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert)

// ["Bilbo", "Gandald", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`)
// })

// let arr = [1, 0, false]
// alert( arr.indexOf(0))
// alert(arr.indexOf(false))
// alert(arr.indexOf(null))
// alert(arr.includes(1))


// let fruits = ['Apple','Orange','Applef']
// alert(fruits.indexOf('Apple'))
// alert(fruits.lastIndexOf('Apple'))


// const arr = [NaN]
// alert(arr.indexOf(NaN))
// alert(arr.includes(NaN))


// let result = arr.find(function(item, index, array) {

// })

// let users = [
//     { 
//         id: 1, 
//         name: "John"},
//     {
//         id: 2,
//         name: "AShok"
//     },
//     {
//         id: 3,
//         name:"Nitesh"
//     }
// ]
// let user = users.find(item => item.id == 1)

// alert(user.name)


// let users = [
//     {
//         id: 1,
//         name: "John"
//     },
//     {
//         id: 2,
//         name: "Ashok"
//     },
//     {
//         id: 3,
//         name: "Mary"
//     },
//     {
//         id: 4,
//         name: "JOjn"
//     }

// ]

// alert(users.findIndex(user => user.name == 'John'))
// alert(users.findLastIndex(user => user.name =='John'))


// let users = [
//     {
//         id: 1,
//         name: "john"
//     },
// {
//     id: 2,
//     name: "Pete"
// },
// {
//     id: 3,
//     name: "Ashok"
// },
// {
//     id: 3,
//     name: "Ashok"
// },
// {
//     id: 3,
//     name: "Ashok"
// },
// {
//     id: 3,
//     name: "Ashok"
// },
// ]
//  let someUsers = users.filter(item => item.id< 4)
//  alert(someUsers.length)

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
// alert(lengths)


// let arr =[1,2,15,22,36,21,]
// arr.sort()
// alert(arr)

// function compare(a,b) {
//     if(a>b) return 1;
//     if(a == b) return 0
//     if(a< b) return -1;
// }

// let arr = [1,2,12]
// arr.sort(compare)
// alert(arr)


// let arr = [1,2,15]
// arr.sort(function(a,b) {return a -b})
// alert(arr)


// let countries =['Osterriech', 'Andorra', 'Vietnam']
// alert(countries.sort((a,b) => a>b ? 1: -1))
// alert(countries.sort((a,b) => a.localeCompare(b)))

// let arr = [1,2,3,4,5]
// arr.reverse()
// alert(arr)


// let names = 'Bilbo, Gandalf, Nazgul'
// let arr = names.split(',')
// for(let name of arr) {
//     alert(`A message to ${name}`)
// }


// let arr = "bilbo, Gandalf, Nazgul, Sarman".split(',', 2)
// alert(arr)

// let str  = "test"
// alert(str.split(''))


// let arr = ["Bilbo", "Gandalf", "Nazgul"]
// let str = arr.join(";")
// alert(str)

// let arr = [1,34,45,6]
// let result = arr.reduce((sum, current) => sum + current, 0)
// alert(result)

// alert(Array.isArray({}))
// alert(Array.isArray([]))


// let aramy = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user){
//         return user.age >= this.minAge && user.age < this.maxAge
//     }
// }
// let users = [
//     {age: 16},
//     {age: 20},
//     {age:23},
//     {age: 30}
// ];
//  let soldiers = users.filter(aramy.canJoin,aramy)
//  alert(soldiers.length)
//  alert(soldiers[0].age)
//  alert(soldiers[1].age)

// function printthevalue(a,b,c) {
//     let result =(a * 20 + b * 23 + c *10)/10;
//     console.log (result)
// }
// printthevalue(5,0,45)


// console.log(document.body.firstChild)

// const arr = document.body.children
// console.log(arr)


// const arr = document.body.children
// const newArr = Array.from(arr)

// for( let i = 0; i< newArr.length; i++) {
//     console.log(newArr[i])
// }

// console.log(thisone)

// const thisone = "abhi"
// // console.log(document.getElementsByClassName("okay"))

// const thisone = document.getElementsByTagName("span");
// thisone[0].style.backgroundColor ="red"
// thisone[0].style.color =" #fff";
// console.log(thisone[0])


// const myBtn = document.getElementById("myBtn")
// myBtn.style.backgroundColor = "blue";
// myBtn.style.color = "#fff";
// myBtn.style.border = "none";
// myBtn.style.padding = "2vmax 4vmax";
// myBtn.style.cursor = "pointer";

// console.log(myBtn.getAttribute("id"))

// const myFunc = ( a,b) => {
//     console.log(a + b)

// }
//  myFunc (1, 5)

// const arr = [2,3,4,5,6]

// const result = arr.find((value, index)=> {
//     if(value > 4) {
//         return value
//     }
// })
// console.log(result)
// arr.find(myFunc);


// function myFunc (value, index) {
//     if(value === 6) {
//         console.log("6 exist")
//     }
// }
// console.log(arr)

// const arr = [2,3,4,5,6]
// const result = arr.filter((value, index) => {
//     if(value<=4) {
//         return value;
//     }
// })
// console.log(result)

// const result = arr.every((value, index) => {
//     return value > 4;
// })

// const result = arr.some((value, index) => {
//     return value > 5;
// })
// for (const element of arr) {
//   console.log(element)  
// }

// arr.forEach((value, index) => {
//     // console.log(value) 
//     console.log(index)
// })


// let totalSum = 0;
// arr.forEach((value,index) => {
//     value += 20;
//     console.log(value)
// })

// const result = arr.reduce((previousValue,value,index) => {
//     return previousValue + value;
// })

// console.log(result)


const input = document.getElementById("numOfwords")
const container = document.querySelector(".container")
const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * 25).toFixed(0)
        text += letters[random]
        console.log(random);

    }
    return text
};
console.log(generateWord(15))

let numOfwords;
const generatePara = () => {
    numOfwords = Number(input.value)

    const para = document.createElement("p")

    let data = "";

    for (let i = 0; i < numOfwords; ++i) {

        const randomNumber =(Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }


    para.innerText = data;

    para.setAttribute("class", "paras")

    container.append(para);
}

