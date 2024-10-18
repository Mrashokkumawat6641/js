const title = document.getElementById("title")
const description = document.getElementById('description')
const form = document.querySelector("form");
const container = document.querySelector(".container")
import { FaDeleteLeft } from 'react-icons/fa';


const tasks = [];

function showAllTasks() {
    tasks.forEach((value, index) => {
        const div = document.createElement('dliv')
        div.setAttribute('class', 'task')

        const innerDiv = document.createElement('div')
        div.append(innerDiv)

        const p = document.createElement('p')
        p.innerText = value.title;
        innerDiv.append(p)

        const span = document.createElement('spna')
        span.innerText = value.description;
        innerDiv.append(span)

        const btn = document.createElement('button')
        btn.setAttribute('class', 'deleteBtn')
        btn.innerText = '';

        btn.addEventListener('click', () => {
            removeTasks();
            tasks.splice(index, 1)
            showAllTasks();
        })
        div.append(btn)
        container.append(div)
    })
}

function removeTasks() {
    tasks.forEach(() => {
        const div = document.querySelector('.task');
        div.remove();
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    removeTasks();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    console.log(tasks)
    showAllTasks();
})



















