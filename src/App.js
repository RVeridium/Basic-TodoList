import React, { useState, useRef } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function App() {
  const [task, setTask] = useState({date: '', description: '', priority: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTask({...task, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
    console.log(todos);
  }

  const deleteTask = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((task, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
    } else {
      alert('Select row first');
    }
  }

  const gridRef = useRef(); 

  const columns = [{ headerName: "Date", field: "date", sortable: true, filter: true}, 
    {headerName: "Description", field: "description", sortable: true, filter: true},
    {headerName: "Priority", field: "priority", sortable: true, filter: true, 
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}]

  return (
    <div className="App">
      <div className="Header">The TodoList</div>
      <div className="form">
        <label>Description:</label>
        <input type="text" name='description' placeholder="Description" onChange={inputChanged} value={task.description}/>
        <label>Date</label>
        <input type="text" name='date' placeholder="Date" onChange={inputChanged} value={task.date}/>
        <label>Priority</label>
        <input type="text" name='priority' placeholder="Priority" onChange={inputChanged} value={task.priority}/>
        <button onClick={addTodo}>Add</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
      <div className="ag-theme-material" 
      style={ {height: '400px', width: '600px', margin: 'auto'} }>
      <AgGridReact
        ref={gridRef} 
        onGridReady={params => gridRef.current = params.api}
        rowSelection="single"
        columnDefs={columns}
        rowData={todos}>
        </AgGridReact>
      </div>
    </div>
  );
}
export default App;

