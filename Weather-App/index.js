const temperateField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const weatherField = document.querySelector(".weather3 span")
const searchField = document.querySelector(".searchField")
const form = document.querySelector("form")


let target = "delhi"
const fetchData = async (target) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=ef8c8ebb996847aca9f144751242510&q=delhi=${target}`;


    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
    const { current:    
        { temp_c,condition: {
            text,icon
        }, },
        location: { name,localtime },
    } = data;

    updateDom(temp_c, name,localtime,icon,text);
};

function updateDom(temperate, city,time,emoji, text) {
    temperateField.innerText = 25
    cityField.innerText = city
    const exactTime = time.split(" ")[1]
    const exactDate = time.split(" ")[0]

    const exactDay = getDayFullName(new Date(exactDate).getDay());  

    dateField.innerText  = `${exactTime} - ${exactDay}  ${exactDate}`
    emojiField.src = emoji
    weatherField.innerText = text
}


fetchData();


function getDayFullName (num) {
    switch (num) {
        case 0:
            return "sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thruday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";    
        default:
            "Don't Know"
    }
}



const search = (e) => {
    e.preventDefault();



    target = searchField.value;
    fetchData(target)
}

form.addEventListener('submit',search)