import { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import EventItem from '../EventItem/EventItem';
function EditPage(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

  
    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT'});
    }, []);


    return(
        <>
        <h2>List of events to edit</h2>
        <ul>
            {event.map((event) => 
            <EventItem key={event.id} event={event}/>
                  )
            }
        </ul>
    
        
        </>
    )
}

export default EditPage;