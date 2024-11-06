import { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import EventFormItem from '../EventFormItem/EventFormtItem';
import HomeButton from '../../HomeButton/HomeButton';
import Logo from '../../Logo/Logo';

function EditPage(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

  
    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT'});
    }, []);


    return(
        <>
   
   <Logo/>
   <HomeButton/>
    
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