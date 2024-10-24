const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const h1 = document.querySelector('h1');
// async function f() {
// return 1;
// }
// f()
// .then(alert)
// 
// async function f() {
// return Promise.resolve(1)
// }
// f().then(alert);

const fetchData = async () => {
    try{
    const responce = await fetch(url);

    const data = await responce.json();

    h1.innerText = data.fact;
} catch (error) {
    console.log(error)
} finally {
    console.log("Final One")
}
};
fetchData();
