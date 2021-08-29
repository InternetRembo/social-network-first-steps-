let initialState = {
    postData: [
        { id: 1, value: 'Здоров , шо робиш?', likes: 0 },
        {
            id: 2,
            value: 'Позич 300 гривень , з зарплати віддам',
            likes: 0,
        },
        { id: 3, value: 'Чо ігнориш , чорт?', likes: 0 },
    ],
    NewPostText: '',
}

const profileReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            let newPost = {
            id: state.postData.length + 1,
            value: action.postMessage,
            likes: Math.random() * (100000 - 20) + 20,
        };
        state.postData.push(newPost);
            state.NewPostText = '';
            return state
        
        case 'UPDATE-NEW-POST-TEXT':
            state.NewPostText = action.newText;
            return state
        
        default : return state

    }
}
export const AddNewPostActionCreator = (text) => {
    return {
        type: 'ADD-NEW-POST',
        postMessage: text,
    };
};

export const UpdateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text,
    };
};

export default profileReducer