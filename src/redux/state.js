import {rerenderEntireTree} from "../render";

let state = {
    messagesPage : {
        dialogsData : [
            {id: 1, name: 'Dymich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Sveta'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ],
        messageData : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'How is your day today?'}
        ],
        newMessageText: 'Alex'
    },
    profilePage : {
        posts : [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post!', likesCount: 20}
        ],
        newPostText: 'Alex'

    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updatePostText = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id : 3,
        message : state.messagesPage.newMessageText
    }
    state.messagesPage.messageData.push(newMessage);
    state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateMessageText = (messageText) => {
    state.messagesPage.newMessageText = messageText;
    rerenderEntireTree(state);
}

export default state;