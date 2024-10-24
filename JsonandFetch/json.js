const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
const h1 = document.querySelector('h1');

const fetchData = () => {
    fetch(url)
        .then((responce) => responce.json())
        .then((data) => (h1.innerText = data.fact))
        .catch((e) => console.log(e))
        .finally(() => console.log("all done"))
};

fetchData();
