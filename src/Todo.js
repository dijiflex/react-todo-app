

import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <List>
            <ListItem> 
                <ListItemText primary={props.text} secondary="Dummy Deadline ⌚" />
            </ListItem>
        </List>
    )
}

export default Todo
