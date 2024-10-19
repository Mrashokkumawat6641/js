// const a = 'Hello world';
// 
// const b = {
    // name: "Abhi",
    // printSurname: () => {
        // console.log('singh')
    // }
// }
// 
// console.log(a)
//  
// 
// console.log(b)
// 
// b.added = "Value is added";
// 
// console.log(b) 
// 
// const a = {
    // name: 'abhi',
    // surname: 'singh',
// };
// 
// const b = a; 
// 
// console.log(a)
// console.log(b)
// 
// a.name = 'changed';
// console.log(a)
// console.log(b)
// 
// b.name = '6 pack programmer';
// console.log(a)
// console.log(b)
// 
// a.surname ='code in js'
// console.log(a)
// console.log(b)
// 
// 
// const RomanReigns = {
    // weight: 263,
    // height: 185,
    // bloodgroup: 'b+',
    // quote: () => {
        // console.log('head of the table')
    // }
// }
// 
// function wweSuperstar (a,b,quote) {
    // return {
        // weight: a,
        // height: b,
        // quote: () => {
            // console.log(quote)
        // },
    // }
// }

// const roman = wweSuperstar(200, 231)

// console.log(roman.constructor)
// Constructor Function


// const temp = wweSuperstar( 20,100, 'head of the table')
// console.log(romanReigns)

// function star () {
    // this.weight = 20;
    // this.height = 20;
// 
// 
// }

// const RomainRegins = new star(265,185);

// console.log(RomainRegins);

// RomainRegins.quote = "head of the table";

// console.log(RomainRegins.constructor)


// const a = Object( { a : 23, b:34, c: 56})
// console.log(a);


// function Enemy(weight, height) {
    // this.weight = weight;
    // this.height = height;
// }
//  const Enemy2 = new Enemy (265, 185);
// 
//  const enemies =[];
// 
//  for(let i =0; i<100; ++i) {
    // enemies.push(new Enemy(Math.random() * 100, 21));
//  }
//  console.log(enemies)

function Hero(size, speed) {
    this.size = size;
    this.speed = speed;
}
// 
// const ironMan = new Hero(10, 20)
// 
// const ironMan2 = ironMan;
// 
// console.log(ironMan)
// console.log(ironMan2)
// 
// ironMan2.size = 23;
// console.log(ironMan)
// console.log(ironMan2)

const arr = [12,34,4,56]
console.log(...arr)
console.log(typeof arr )