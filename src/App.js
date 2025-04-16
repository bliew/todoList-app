import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //need to set input text
  const [inputText, setInputText] = useState(''); //empty string as initial state
  //need to set todo list items
  const [todos, setTodos] = useState([]); //empty list of todos
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <ToastContainer />
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div className="App">
          <Header />
          <InputTodo
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      )}
    </>
  );
}

export default App;
