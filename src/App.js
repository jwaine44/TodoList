import React, {useState} from 'react'
import './App.css';

import Todo from './components/Todo';

// After really struggling to conceptualize this assignment in terms of execution and taking into account my preferred learning style of seeing things in action, I decided to watch and follow along with the video for this assignment. I felt this was most beneficial to my learning process.

function App() {
  /*
    Below array destructure is equivalent to:
    const newTodoStateArr = useState("")
    const newTodo = newTodoStateArr[0]
    const setNewTodo = newTodoStateArr[1]
    Two variables created to store the first and second items in array; if you had more indexes in array, there'd be more variables in the destructure below
    Empty string in useState is the starting point of the state
  */

  const [newTodo, setNewTodo] = useState("");
  // Setting the list of todos
  const [todos, setTodos] = useState([]);

  // Preventing refreshing the page on form submit by doing e.preventDefault
  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    // This prevents a new blank entry from being added in if you click the add button without putting in a value in the input field
    if(newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    // Have to pass in brand new array or object into setTodos() to update the state and re-render the page
    // Putting in the old todos array and adding the newTodo into it
    // setTodos and pass in a brand new array containing all current todos plus one more
    // Passing in todoItem, the object so it has both the text of it and whether it's complete, which we'll be handing with the checkbox
    setTodos([...todos, todoItem]);
    // This clears the state
    setNewTodo("");
  };

  // Identifying which todo to delete by index
  // Giving a new list with the requested item removed
  // Like map, filter needs the array (todo), and an index value (i)
  // Whenever i is not equal to the item we want to delete, we want to keep the item; this'll return true and keep the item
  const handleTodoDelete = (delIndex) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIndex;
    });

    // Resetting setTodos on line 18 to the new array, the filtered one on line 48
    setTodos(filteredTodos);
  }

  // Creating new array with the complete value changed, since we need the same array and not removing any items, we use .map()
  // If index is equal to i, todo's complete status will equal the opposite of that in terms of the checkbox
  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        // const updatedTodo = {...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    });
    // Resetting setTodos to this new array of updatedTodos
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <form onSubmit = {(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange= {(event) => {
          // Updating setNewTodo from its default value of empty string (line 16) to whatever is put into the form via event.target.value
          // target refers to the HTML element, in this case the input
          setNewTodo(event.target.value);
        }} type="text"
        // This clears the input box upon hitting the Add button by tying it to the useState("") on line 16 via newTodo
        value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {/* Mapping the array's indexes into the Todo component */}
      {/* todos.map takes in two arguments: todo is the current item that's being iterated over and the index of the item that's currently being iterated over*/}
      {/* key = {i} since a list is being rendered here */}
      {/* the handle functions below are callback functions that only execute when things are clicked; they're being executed later, not now; they're defined here in the App so they need to be set below */}

      {todos.map((todo, i) => {
          return (
          <Todo key = {i} 
          todo = {todo} 
          handleToggleComplete = {handleToggleComplete} handleTodoDelete = {handleTodoDelete} 
          i = {i} />
          );
        })}
    </div>
  );
}

export default App;
