import './App.css';
import ToDoList from './ToDoList'


export default function App() {
  
  const doneArray = ["have fun"]
  const notDoneArray = ["calm down", "learn react", "learn MERN"]


  return (
    <div className="app">
      <header className="App-header">
        <h1>Hello React!</h1>
      </header>

        <ToDoList todos={doneArray} listName={"Complete"} />

        <ToDoList todos={notDoneArray} listName={"Incomplete"} />

    </div>
    

  );
}