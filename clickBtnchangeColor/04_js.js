const button = document.getElementById('myButton');
const Box = document.getElementById("Box1")
const heading = document.getElementById('heading')
const input = document.querySelector('input');

    button.addEventListener('click', () => {
    Box.style.backgroundColor = "red";
})

button.addEventListener('click', () => {
    Box.classList.add('classForDiv')
})

button.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    button.style.backgroundColor = 'purple';

    Box.removeEventListener('mouseover',func1)
})

 function func1() {
    button.style.transform = 'scale(1.1)';
    heading.style.backgroundColor = "pink";
 }
 Box.addEventListener('mouseover', func1)

 Box.addEventListener('mouseout', () => {
    heading.style.backgroundColor = "";
    button.style.transform = "";
 })

// window.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     button.style.filter = 'blur(10px)';
//  })

//  window.addEventListener('click' , (e) => {
//     console.log(e.clientX)
//     console.log(e.clientY)
//  })

Box.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'rgb(50,50, 50)';
})
Box.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
})

input.addEventListener('change', (e) => {
    console.log(e.target.value) 
})



let a = [1,2,3,5,6,7]
a.length = 3;
console.log(a)
a.length = 5;
console.log(a)