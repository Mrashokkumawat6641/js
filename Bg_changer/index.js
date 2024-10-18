const zodiac = document.getElementById("zodiac")

const body = document.body;
const changeBackground = () => {
   switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor = "#fc0303";
        break;
    case "tarus":
        body.style.backgroundColor = '	#663399';
        break;
    case "gemini":
        body.style.backgroundColor = '	#BA55D3';
        break;
    case "cancer":
        body.style.backgroundColor = '	#DB7093';
        break;
    case "leo":
        body.style.backgroundColor = '	#DC143C';
        break;
    case "virgo":
        body.style.backgroundColor = '#CD5C5C';
        break;
    case "libra":
        body.style.backgroundColor = '#F08080';
        break;
    case "scorpio classic s11":
        body.style.backgroundColor = '#000000';
        break;
    case "thar":
        body.style.backgroundColor = '#000000';
        break;
    case "sagottarius":
        body.style.backgroundColor = '	#DC143C';
        break;
    case "aquarius":
        body.style.backgroundColor = '	#FF8C00';
        break;
    case "capricorn":
        body.style.backgroundColor = '#FFFF00';
        break;
    case "Pisces":
        body.style.backgroundColor = '	#98FB98';
        break;

    
   
    default:
        break;
   }
}

