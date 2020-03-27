let rerenderEntireTree = () => {
    console.log('State is changed');
}

let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePostText (postMessage) {
        this._state.profilePage.newPostText = postMessage;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id : 3,
            message : this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messageData.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateMessageText(messageText) {
        this._state.messagesPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }
}

//window.state = state;

export default store;