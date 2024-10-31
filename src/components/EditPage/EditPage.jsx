import { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import EventFormItem from '../EventFormItem/EvenFormtItem';
import { Link } from 'react-router-dom';

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
            <EventFormItem key={event.id} event={event}/>
                  )
            }
        </ul>
        <Link to='/homepage'><button>Go home</button></Link>
  
        
        </>
    )
}

export default EditPage;