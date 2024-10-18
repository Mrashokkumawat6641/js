// console.log(Math.round(4.1))

// let a = 4.4
// console.log(Math.round(a))

//two case same output

const b = Math.floor(4.8)
console.log(b)

const c = Math.ceil(14.9)
console.log(c)

const d = Math.trunc(8.5)
console.log(d)

const f = Math.pow(2,10)
console.log(f)
 
const r = Math.sqrt(5)
console.log(r)

const func1 = (a, b) => {
    return a - b;
}
console.log(func1(3, 6))


const e = Math.sign(-45)
console.log(e)
console.log(Math.sign(-10));   // Output: -1 (negative number)
console.log(Math.sign(0));     // Output: 0 (zero)
console.log(Math.sign(-0));    // Output: -0 (negative zero)
console.log(Math.sign('abc')); // Output: NaN (not a number)

const a  =  Math.tan((90 * Math.PI) / 180)
console.log(a)
