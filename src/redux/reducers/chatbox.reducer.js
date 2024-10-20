const chatboxReducer = (state = [], action) => {
if (action.type === 'CHATBOX_SET') {
    return action.payload;
}
    return state;
}

export default chatboxReducer;