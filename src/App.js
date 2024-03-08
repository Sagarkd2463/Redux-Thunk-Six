import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';
import './App.css';

function App() {
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  if(todos.todo.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todo</button>
      {
        todos.todo.data && todos.todo.data.map((e) => {
            return (
              <li key={e.id}>{e.title}</li>
            )
        })
      }
    </div>
  );
}

export default App;
