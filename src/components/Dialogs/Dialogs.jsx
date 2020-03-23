import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Dymich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ];

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'How is your day today?'}
    ];

    let dialogElement = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messageElement = messageData.map( message => <Message message={message.message}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElement }
            </div>
            <div className={classes.messages}>
                { messageElement }
            </div>
        </div>
    );
}

export default Dialogs;