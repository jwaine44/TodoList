const Todo = (props) => {
    const todoClasses = [];

    if(props.todo.complete) {
        todoClasses.push("line-through");
    }

    // 

    // todos.map in the App will go to the below div in the return statement; div so each todo appears on a new line

    // Whenever the button is pushed, the state changes to have the new value in the array and function App on line 6 is re-run with the new state remembered by React so the array will have the previous values that were input; re-renders every time the array changes

    // When the delete button is clicked it runs the handleTodoDelete() function; onClick listener needs callback function, so on every event it runs the callback function of handleTodoDelete

    // handleTodoDelete above needs the index value as an argument so the index value we already have below is passed in, which is i

    // Since todo is now an object, we need the todo in the span to be todo.text to grab that text

    // If the checkbox is checked, the todo is marked as complete; if todo state of completed is true, that means the input box is checked; if todo.complete is false that means the checkbox is not checked

    // handleToggleComplete knows which todo is complete by the index (i)

    // Need the props. for stuff here since they're properties of the Todo const on line 1; since todo is passed into the Todo component on line 98 in the App

    return (
    <div>
        <input onChange={(event) => {
        props.handleToggleComplete(props.i);
        }} checked = {props.todo.complete} type="checkbox" />

        <span className={todoClasses.join(" ")}>{props.todo.text}</span>

        <button onClick={(event) => {
        props.handleTodoDelete(props.i);
        }}
        style={{marginLeft: "20px"}}
        >
        Delete</button>
    </div>
    );
};

export default Todo;