
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    //  When the apploads, listen to the database and fetch new todos, as they get added 
    useEffect(() => {
        // effect runs when the app loads
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ( {id: doc.id, todo: doc.data().todo})));
        })
    }, [])
    
    const addTodo = (event) => {
        //This will fireoff when we click the button
        event.preventDefault();

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTodos([...todos, input]);
        setInput('');
    }
  return (
    <div className="App">
      <h1>Hello Felix, Plan your day now 🚀</h1>
      <form>
        <FormControl>
            <InputLabel htmlFor="my-input">✅ Write a todo App</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        
        <Button color="primary" variant='contained' disabled={!input}  type='submit' onClick={addTodo}>Add Todo</Button>;
       
      </form>
      
    
      <ul>
          {todos.map(todo => <Todo todo={todo} />)}
          
      </ul>
    </div>
  );
}

export default App;
