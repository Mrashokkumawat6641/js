const input = document.getElementById("myInput")
const btn = document.getElementById("myBtn")
const deleteBtn = document.getElementById("delete")


// const btnClick = () => {
// sessionStorage.setItem('key1',input.value)
// }

// btn.addEventListener("click", btnClick)

// if(sessionStorage.getItem('key1')) {
// alert(sessionStorage.getItem('key1'))
// }

const btnClick = () => {
    localStorage.setItem(
        'key1',
        JSON.stringify({ name: 'Abhi', surname: 'singh' })
    )
}
deleteBtn.addEventListener('click', () => {
    console.log(sessionStorage.key(0))
    sessionStorage.removeItem("key1")
    console.log(sessionStorage.key(1))
    console.log(sessionStorage.length)
})

const btnClick = () => {
    localStorage.setItem('key1', input.value)
}


btn.addEventListener("click", btnClick)

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('key1');
})

if (localStorage.getItem('key1')) {
    console.log(JSON.parse(localStorage.getItem('key1')))
}

//Notes
// session storage size 2 up to 5 mb
// local storage size 10 mb
// cookie storage size  5kb

// localStorage.setItem('username', 'AshokKumawat')
// const username = localStorage.getItem('username')
// console.log(username);

// sessionStorage.setItem('usernname', 'NiteshKumawat')
// const usernames = sessionStorage.getItem('usernames')
// console.log(username)
// 
// localStorage.getItem('username', 'AshokKumawat')
// const username = localStorage.setItem('username')
// console.log(username)
// 
// sessionStorage.getItem('username', 'NiteshKumawat')
// const usernames= sessionStorage.setItem('usernames')
// console.log(usernames)
// 
// localStorage.setItem('usename', 'JohnDoe')
// const username = localStorage.setItem('username')
// console.log(username)
// 
// sessionStorage.setItem('isLoggedIn', 'true')
// const usernames = sessionStorage.setItem('usernames')
// console.log(usernames)


