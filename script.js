let textBox = document.getElementById('text-box')
let addButton = document.querySelector('.add-todo')
let todoList = document.querySelector('.todo-list')
let isEmpty = true
let todos =[
    
]

console.log('s')


render ()
function render () {
    todoList.innerHTML = ""
    todos.forEach(todo=> {
        const element = document.createElement('div')
        const todoName = document.createElement('p')
        const deleteButton = document.createElement('button')
    
        element.classList.add('todo-holder')
        deleteButton.classList.add('deleteButton')
    
        todoName.innerText = todo.todoName
        deleteButton.innerText = "X"
        deleteButton.id = todo.id
        
        element.appendChild(todoName)
        element.appendChild(deleteButton)
        todoList.appendChild(element)
    })

    let deleteBtn = document.querySelectorAll('.deleteButton')
    deleteBtn.forEach(button => {
        button.addEventListener('click', deleteTodo)
    })
}

function deleteTodo() {
    const todoId = parseInt(this.id)

    checkId(todoId)
}

function checkId (todoId) {
  todos =  todos.filter(todo => {
    if (todo.id === todoId) {
        return false
    } else {
        return true
    }
   })
   render()
}




addButton.addEventListener('click', addTodo)



function addTodo() {
    if (textBox.value === "") {
        return
    } else {
        todos.push({
            todoName: textBox.value,
            id: todos.length 
        })
        textBox.value = ""
    }
    
   
   render()
}



