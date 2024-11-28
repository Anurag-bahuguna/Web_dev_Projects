const todoList =[{
        name: 'bath',
        dueDate:'2024-12-13'
    },{
        name:'cake',
        dueDate: '2024-12-13'
    }];   //obj inside a array


renderTodoList();
function renderTodoList(){
    let todoListHTML ='';       

    todoList.forEach(function(todoObject,index){            
    
        const {name,dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>                 
            <button onclick = "
                todoList.splice(${index},1);
                renderTodoList();
            " class="delete-todo-btn">Delete</button>
            `;    
        todoListHTML += html; 
    });

    document.querySelector('.js-todo-list')
        .innerHTML=todoListHTML; //putting div into js

}
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name= inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        // name:name,
        // dueDate:dueDate or
        name,
        dueDate
    });

    inputElement.value =''; //reset the input box

    renderTodoList(); /*added new item and display again*/
}