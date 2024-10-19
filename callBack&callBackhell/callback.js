// function sum(a,b,c) {
    // const result = a + b;
    // c(result)
    // displaySum(result);
// }
// 
// function displaySum(result) {
    // const h1 = document.querySelector("h1");
    // h1.innerText = result;
// }
// 
// sum(20,30,displaySum);
// sum(20,130,alert );
// 
// 
// const arr = [1,2,3]
// 

//hight order function
// arr.forEach(() => {
    // console.log("hello world")
// })
// 
// const arr = [1,2,3,4,5,6]
// 
// function caculatorMultipleTen(arr = [] , callback) {
    // const ans = [];
// 
    // for(let i =0;i< arr.length; i++) {
        // const element = callback(arr[i])
        // ans.push(element);
        const ans = []
// 
    // console.log(ans)
    // }
// }
// 
// function caculatorDivideByTen(arr = []) {
    // const ans = [];
// 
    // for(let i =0; i< arr.length;i++) {
        // ans.push(arr[i]/10);
    // }
    // console.log(ans)
// }
// 
// function multiply(a) {
    // return a * 10;
// }
// function divide(a) {
    // return a / 10;
// }
// 
// caculatorMultipleTen(arr,multiply)
// caculatorDivideByTen(arr,divide)
// 
// 
// caculatorDivideByTen(arr, (a) => a * 10);
// caculatorMultipleTen(arr, (a) => a / 10);
// 
// const fetchData =() => {
    // setTimeout(() => {
        // gemesList.push({
            // name: "game 1",
            // id: 'sdfjiejdj',
        // },
    // {
        // name: 'game 2',
        // id: 'dfiejf',
    // },
    // {
        // name: 'game 3',
        // id: 'iekdjdk',
    // }
    // );
    // console.log(gamesList);
    // },2000)
// };

// fetchData();
const gamesList = [
    {name: 'chess'},
    {name: 'Checkers'},
    {name: 'Monopoly'},

];                                                                               

const displayGame = () => {
    setTimeout(() => {
        for(let i=0; i< gamesList.length; i++) {
            const p = document.createElement('p');
            p.innerText = gamesList[i].name;
            document.body.append(p);
        }
        console.log(gamesList)
    },  1000);
}

displayGame();