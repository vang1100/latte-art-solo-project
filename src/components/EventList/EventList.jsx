import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import EventListItem from '../EventListItem/EventListItem';
import './EventList.css'


function Eventlist(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT'});
    }, []);

    return(
        <>
        <div>

        <ul>
            
            {event.map((event) => 
            <EventListItem key={event.id} event={event}/>
            )
            
            }
            
        </ul>


        </div>
         
         
       
        </>
    )
}

export default Eventlist;

 {/* <ul>
            {event.map((event) => 
                    <li key={event.id}>
                        
                        <h4>
                            {event.date ? event.date.slice(0, 10) : 'YYYY/MM/DD'} 
                            <br/>
                            {event.event_name}
                            <br/>
                            {event.address} {event.city}, {event.state} {event.zip_code}
                            <br/>
                            {event.time ? event.time.slice(1,5) : 'no time data'}
                        </h4>
                        
                        <br/>
                       <Link to='/edit'><button>Edit</button></Link> 
                        <button onClick={() => dispatch({type: 'DELETE_EVENT', payload: event.id})}>Delete</button>
                        <br/>
                        <br/>

                      

                    </li>)
            }
        </ul> */}

// const getEvents = () => {
    //     axios.get('/api/event')
    //     .then((response) =>{
    //         dispatch({
    //             type: "SET_EVENT",
    //             payload: response.data,
    //         });
    //     })
    //     .catch((error) => {
    //     console.log('error in GET events', error);
    //     });
    // };