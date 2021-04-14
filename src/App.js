
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState(['Take a walk with the dog', 'Send an email to Mike']);
    const [input, setInput] = useState('')
    const addTodo = (event) => {
        //This will fireoff when we click the button
        event.preventDefault();
        setTodos([...todos, input])
        setInput('')
    }
  return (
    <div className="App">
      <h1>Hellow World 🚀</h1>
      <form>
        <FormControl>
            <InputLabel htmlFor="my-input">✅ Write a todo App</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        
        <Button color="primary" variant='contained' disabled={!input}  type='submit' onClick={addTodo}>Add Todo</Button>;
       
      </form>
      
      <ul>
          {todos.map(todo  => (<li >{todo}</li>))}
      </ul>
    </div>
  );
}

export default App;
