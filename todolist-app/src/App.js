import React,{useState} from 'react';
import "./App.css";
import Header from './components/Header'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList';

function App(){
    //need to set input text 
    const [inputText, setInputText] = useState(""); //empty string as initial state
    //need to set todo list items
    const [todos, setTodos] = useState([]); //empty list of todos
    return (
        <div className="App">
            <Header/>
            <InputTodo todos = {todos} setTodos = {setTodos} inputText = {inputText} setInputText ={setInputText} />
            <TodoList todos = {todos} setTodos={setTodos} />
        </div>
    );
}

export default App;