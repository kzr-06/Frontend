const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const ul = document.getElementById('list')


addBtn.addEventListener('click',function(){
    let arr =[]
    
    const newTask = taskInput.value;
    console.log(newTask);
    
    if(newTask === ''){
        return alert('Enter Your task first')
    }
    
    
    arr.push(newTask)
    
    const delBtn = document.createElement('button')
    delBtn.className = 'deleteBtn'
    delBtn.textContent = 'Delete'

    const li = document.createElement('li');
    const check = document.createElement('input');
    check.type = 'checkbox';
    

    const span = document.createElement('span')
    span.textContent = newTask
    span.className = 'todo-task'

    li.appendChild(check)
    li.appendChild(span)
    li.appendChild(delBtn)

    ul.appendChild(li)

    check.addEventListener('change',() => {
        span.classList.toggle('completed')
    })    

    taskInput.value = '';

    delBtn.addEventListener('click', function() {
        li.remove();
    });

})


























