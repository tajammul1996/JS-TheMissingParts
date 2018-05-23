$(document).ready(function() {
  //do jQuery stuff when DOM is ready

// const task = document.getElementById('task-title');
// // document.getElementById

// console.log(task);

// // Get things

// console.log(task.id);
// console.log(task.className);

// // Change styling

// task.style.background = 'black';
// task.style.color = 'white'
// task.style.padding = '5px'


// // Change content

// task.textContent = 'Task List'
// task.innerText = 'hello'
// task.innerHTML = '<span style="color:red">Woohooo!</span>'

// Document query selector

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5 '))

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'
document.querySelector('li:nth-child(3)').style.color = 'green '

});