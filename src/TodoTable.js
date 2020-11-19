import React from 'react';



function TodoTable(props) {

    return (
        <div>
        <table>
        <tbody>
        <tr><th>Date</th><th>Description</th></tr>
          {props.todos.map((todo, index) => <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
              <td><button value={index} onClick={e=> props.func(e.target.value)} >Delete</button></td>
              </tr>)}
            </tbody>
            </table>
        </div>
    )

}
export default TodoTable; 
