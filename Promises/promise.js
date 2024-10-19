// const a = new Promise((res, rej) => {
// 
// let success = true;
// 
// if(success) res("Promise Fulfilled")
// else rej("Some Technical Error")
// });
// 
// a.then((parameter) => {
// console.log(parameter);
// }).catch((error) => {
// console.log(error)
// });

const fetchData = (arr = []) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push({ name: 'abhi' });
            if (arr.length > 0)
                 {
            resolve("Data Fetched")
                 }
            else {
                reject('Some technical Error')
            }
        }, 2000);
    });
};
let arr =[];

fetchData(arr)
.then((message) => { console.log(message)})
.catch((message) => {console.log(message)})
.finally(() => console.log("Will Work Either")) 