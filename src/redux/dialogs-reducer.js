
let initialState ={
    dialogData: [
        { id: 1, name: 'Zed4Shadow' },
        { id: 2, name: 'PudgeLox' },
        { id: 3, name: 'AngelUbiyca' },
        { id: 4, name: 'Zed4Shadow' },
    ],
    messagesData: [
        { id: 1, value: 'Порошенко брата вбив' },
        { id: 2, value: 'Ало , параша , го лол' },
        { id: 3, value: 'Тарасе , вас звільнено за системні прогули' },
        { id: 4, value: 'А ти точно позашлюбний син Степана Гіги?' },
    ],
    NewMessageText: '',
}
const dialogReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.NewMessageText = action.newText;
            return state
        case 'ADD-NEW-MESSAGE':
            let newMassage = {
                id: state.messagesData.length + 1,
                value: action.message,
            };
            state.messagesData.push(newMassage);
            state.NewMessageText = '';
            return state
        default : return state
    }
};


export const UpdateNewMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text,
    };
};

export const AddNewMessageActionCreator = (text) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        message: text,
    }
}

export default dialogReducer;

