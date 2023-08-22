import ToDoItem from './ToDoItem'
import "./ToDoList.css"

export default function ToDoList({ todos, listName }) {

    const toDoListItems = todos.map(function (todoItem, todoIndex) {
        return <ToDoItem todo={todoItem} index={todoIndex}/>;
    })

    return (

        <div className="container">

            <h3>{listName}</h3>
            {toDoListItems}
          

            
            </div>
    )
}
