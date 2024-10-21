const chatboxReducer = (state = [], action) => {
if (action.type === 'SET_CHATBOX') {
    return action.payload;
}
    return state;
}

export default chatboxReducer;