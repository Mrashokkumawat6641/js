const btn = document.querySelector('button')
const printName = (name,income,male) => {


    let Gender = male;
    
    if(Gender) {
        Gender = 'male';

    }else{
        Gender = "Female";
    }
    console.log(`Welcome, ${name}. Your Income is $${income}.Gender is male`)
}; 

const customTimeout = setTimeout(printName, 2000,'Abhi',1000, "Male");
btn.addEventListener('click', () => {
    clearTimeout()
    console.log(customTimeout)
})
// 
// const customTimeOut = setInterval(printName, 2000, 'Abhi', 1000, "Male")
// btn.addEventListener('click', () =>  {
    // clearTimeout()
    // console.log(customTimeOut)
// })
setTimeout(() => alert("World"));

alert("Hello");