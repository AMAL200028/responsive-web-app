import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { task, done: false }]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <div className="mt-5">
      <h2>Todo List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={addTodo}>Add</button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li 
            key={index} 
            className={`list-group-item d-flex justify-content-between align-items-center ${todo.done ? 'text-decoration-line-through' : ''}`}
          >
            {todo.task}
            <div>
              <button 
                className="btn btn-sm btn-success me-2" 
                onClick={() => toggleDone(index)}
              >
                Mark as {todo.done ? 'Undone' : 'Done'}
              </button>
              <button 
                className="btn btn-sm btn-danger" 
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
