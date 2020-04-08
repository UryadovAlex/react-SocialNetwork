import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElement = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
    let messageElement = state.messageData.map( message => <Message message={message.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElement }
            </div>
            <div className={classes.messages}>
                <div>{ messageElement }</div>
                <div><textarea onChange={ onNewMessageChange } value={ newMessageBody }/></div>
                <div>
                    <button onClick={ onSendMessage }>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;