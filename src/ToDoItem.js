import './ToDoItem.css'
    
export default function ToDoItem({ todo, index }) {
    console.log("testing props", todo)
    // we will evaluate the index prop -> if even provide one style, if odd return another 

    const bgColor = index%2? "lavenderItem":"plumItem"

    return (<li className={bgColor}>{todo}</li>)
}