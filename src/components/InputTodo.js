import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const InputTodo = ({ todos, setTodos, inputText, setInputText }) => {
  let id = uuidv4(); //generate random id

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //prevents page from refreshing
    if (inputText) {
      setTodos([
        ...todos, //keep all previous todos
        { text: inputText, completed: false, id }, //update value if input is new
      ]);
    } else {
      toast.error('Must provide a todo list item');
    }
    setInputText(''); //set inputText to empty to delete what you have typed into the bar
  };

  return (
    <form className="inputform input-field">
      <input
        value={inputText} //UI will change so the bar is empty
        onChange={inputTextHandler}
        type="text"
        className="input-text"
      />
      <button
        onClick={submitHandler}
        className="btn #ef9a9a red lighten-3 "
        type="submit"
        name="action"
      >
        Submit
      </button>
    </form>
  );
};

export default InputTodo;
