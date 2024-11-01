import { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import EventFormItem from '../EventFormItem/EvenFormtItem';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
function EditPage(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

  
    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT'});
    }, []);


    return(
        <>
        <Link to='/homepage'>
            <Button 
                variant="contained"
                sx={{
                backgroundColor: '#c7a69b', // Lighter shade
                color: 'white',
                '&:hover': {
                backgroundColor: '#b89b88' // Slightly darker shade for hover effect
                }
            }}
            >
                Go home
            </Button>
        </Link>
    
        <ul>
            {event.map((event) => 
            <EventFormItem key={event.id} event={event}/>
                  )
            }
        </ul>
       
  
        
        </>
    )
}

export default EditPage;