const eventReducer = (state = [], action) => {
    if (action.type === 'SET_EVENT') {
        return action.payload;
    }
        return state;
    }
export default eventReducer;