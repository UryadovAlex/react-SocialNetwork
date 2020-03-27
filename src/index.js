import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={ store.addPost.bind(store) } updatePostText={store.updatePostText.bind(store)}
                 addMessage={store.addMessage.bind(store)} updateMessageText={store.updateMessageText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
