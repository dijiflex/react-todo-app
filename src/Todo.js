

import { Button, List, ListItem, ListItemText, Modal } from '@material-ui/core'
import React, { useState } from 'react';
import db from './firebase'
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true)
    }

    return (
        <>
            <Modal
            open={open}
            onClose={e => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <div>
                    <h1>Open</h1>
                    <button onClick={e=> setOpen(false)}>Close</button>
                </div>
            </Modal>

        <List className='todo__list'>
            <ListItem> 
                <ListItemText  primary={props.todo.todo} secondary="Dummy Deadline ⌚" />
            </ListItem>
            <Button onClick={e => setOpen(true)}>Edit Me</Button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
        </>
    )
}


export default Todo
