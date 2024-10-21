import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChatbox(){

    try{

        const chatboxResponse = yield axios.get('/api/chatbox');

        yield put({
            type: 'SET_CHATBOX',
            payload: chatboxResponse.data
        });

    } catch (error) {
        console.log('fetchChatbox saga error', error);
    }

}

function* fetchChatboxSaga(){
    yield takeEvery('FETCH_CHATBOX', fetchChatbox);
}

export default fetchChatboxSaga;