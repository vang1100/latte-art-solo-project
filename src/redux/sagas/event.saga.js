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

// function to delete

function* deleteEvent(action){
    try {
       yield axios.delete(`/api/event/${action.payload}`);
       yield put({type: 'FETCH_EVENT' });
    } catch (error) {
        console.log('error in deleting event -saga ', error);
    }

}

// function to update event

function* editEvent(action){
   try{
    yield axios.put(`/api/event/${action.payload.id}`, action.payload); // sending updates to the server
    yield put({type: 'FETCH_EVENT' });
   } catch(error){
    console.log('error in PUT event - saga', error)

   }

}


function* fetchEventSaga(){
    yield takeEvery('FETCH_EVENT', fetchEvent);
    yield takeEvery('DELETE_EVENT', deleteEvent);
    yield takeEvery('EDIT_EVENT', editEvent);
}

export default fetchEventSaga;