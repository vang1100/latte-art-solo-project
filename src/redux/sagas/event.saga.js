import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchEvent(){
    try {
        //get events

        const eventResponse = yield axios.get('/api/event');

        // set values of the event reducer

        yield put({
            type: 'SET_EVENT',
            payload: eventResponse.data
        });
    } catch (error) {
        console.log('error in fetchEvent saga function', error);
    }
}

function* fetchEventSaga(){
    yield takeEvery('FETCH_EVENT', fetchEvent);
}

export default fetchEventSaga;