import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body));
    };

    return <Dialogs updateNewMessageBody={ onNewMessageChange } sendMessage={ onSendMessageClick } messagesPage={state}/>;
};

export default DialogsContainer;