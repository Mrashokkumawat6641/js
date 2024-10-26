// class Test {
    // a = 1;
    // b = 2;
    // c = 3;
    // constructor() {
        // console.log(this.c)
    // }
// 
// 
// }
// 
// const obj = {
    // a:1,
    // b:2,
    // c:3,
    // d: function (params,head) {
        // this.a = params;
        // this.b = head;
        // console.log(this)
    // },
// };
// obj.d(25,55);

// const obj = {
    // a : 3,
    // fun1: () => {
        // console.log(this)
    // },
// };
// obj.fun1();
// 

// const obj = {
    // a:2,
    // func1 : function () {
        // const sds = () => {
            // console.log(this)
        // };
        // sds();
    // },
// };
// 
// obj.func1();    


// const obj = {
    // name: 'John',
    // age: 30,
    // asd() {
        // console.log(this)
    // },
// };
// 
// function asd() {
    // console.log(this)
// }
// obj.asd();

// Call Method

const obj1 = {
    name: 'John',
    surname: 'Singh',
    getName: function () {
        console.log(this.name);
        // console.log(this.surname)
    },
};

const obj2 = {
    name: 'Doe',
    age: 30,
    getName: function () {
        // console.log(this.name);
        // console.log(this.age)
    },
};

obj1.getName();
// obj2.getName();
obj1.getName.call(obj2)



const obj3 = {
    name: 'John',
    surname: 'Singh',
    getName: function () {
        console.log(this.name);
        // console.log(this.surname)
    },
};

const obj4 = {
    name: 'Doe',
    age: 30,
    getName: function () {
        // console.log(this.name);
        // console.log(this.age)
    },
};

obj3.getName();
// obj2.getName();
obj3.getName.call(obj4)



const obj5 = {
    name: 'John',
    surname: 'Singh',
    getName: function (s) {
        console.log(this.name,s);
    },
};

const obj6 = {
    name: 'Doe',
    age: 30,
};

obj5.getName("Haarami");
const special  = obj5.getName.bind(obj6, "Haarami45")
console.log(special)