import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    let messageElement = props.state.messageData.map( message => <Message message={message.message}/> );

    let newTextElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateTextMesage = () => {
        let text = newTextElement.current.value;
        props.updateMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                { dialogElement }
            </div>
            <div className={classes.messages}>
                <textarea ref={ newTextElement } onChange={updateTextMesage} value={props.state.newMessageText}/>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
                { messageElement }
            </div>
        </div>
    );
}

export default Dialogs;