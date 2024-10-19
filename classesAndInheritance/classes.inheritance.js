//private variable

// class Myclass {
    // #a = 20;
    // #b =30;
// }

// class Myclass {
    // a = 20;
    // b = 30;

    // constructor(value1, value2) {
        // this.a = value1;
        // this.b = value2;
    // }

    // print() {
        // console.log("I am printing",this.a);
    // }
// }

// const obj1 = new Myclass();
// console.log(obj1)

// const obj1 = new Myclass(20, 34);

// console.log(obj1.a)
// console.log(obj1.b)// not access the private variable

// const Class2 = class Myclass {
    // #a;
    // #b;
// 
    // constructor(value1, value2) {
        // this.#a = value1;
        // this.#b = value2;
    // }
// 
// get getData() {
    // return this.#b;
// }
// set setA(a) {
    // this.#a = a;
// }
// setB(a) {
    // this.#b =a;
// }
// print() {
    // console.log('I am printing', this.b);
// }
// };
// const obj1 = new Class2(230, 23)
// 
// console.log(obj1.getData)


class Electronics {
    #input;
    #output;
    #name;
    // #plugType

    constructor (input,output,name) {
        this.#input = input;
        this.#output = output;
        this.#name = name;
        // this.#plugType = plugType;
    }

    print() {
        console.log(this.#name)
        console.log(this.#output)
        console.log(this.#input)
        
    }
}

class Charger extends Electronics {
    #plugType;
    #RPM;

    constructor(input, output,name,plugType,rpm) {
        super(input, output, name)
        this.#plugType = plugType;
        this.#RPM = rpm;
        
    }
}

const hpcharger = new Charger(112,222, ' Hp Charger','European')
const dellcharger = new Charger(116,221, ' dell Charger','European')
const asuscharger = new Charger(119,228, ' asus Charger','European')
const hardisk = new Electronics(200, 250, 'Hp Hard disk')
hpcharger.print();
dellcharger.print()
asuscharger.print()