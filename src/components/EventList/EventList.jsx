import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';

function Eventlist(){

    const dispatch = useDispatch();

    const getEvents = () => {
        axios.get('/api/event')
        .then((response) =>{
            dispatch({
                type: "SET_EVENT",
                payload: response.data,
            });
        })
        .catch((error) => {
        console.log('error in GET events', error);
        });
    };

    useEffect(() => {
        getEvents();
    }, []);

    return(
        <>
        hi. event list should appear here
        </>
    )
}

export default Eventlist;