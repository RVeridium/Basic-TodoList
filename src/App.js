import React, { useState }from 'react';
import './App.css';
import './TodoTable';
//import TodoTable from './TodoTable';

function App() {
  const [task, setTask] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTask({...task, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
  }
  function poista(props) {
    todos.splice(props,1)
    const vali = todos;
    setTodos([]);
    setTodos([...vali]);
  }





  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type="text" name='description' onChange={inputChanged} value={task.description}/>
        <label>Date</label>
        <input type="text" name='date' onChange={inputChanged} value={task.date}/>
        <input type="submit" value="Add"/>
      </form>
      <table>
        <tbody>
          <tr><th>Date</th><th>Description</th></tr>
          
          {todos.map((todo, index) => <tr key={index}>
              <td>{todo.date}</td>
                <td>{todo.description}</td>
                <td>
                  <button value={index} onClick={e=> poista(e.target.value)} >Delete</button>
                  </td>
              </tr>)}
            </tbody>
            </table>
    </div>
  );
}
//<TodoTable todos={todos} />
export default App;
