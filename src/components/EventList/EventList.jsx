import { useEffect} from 'react';

import { useSelector, useDispatch} from 'react-redux';

function Eventlist(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

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

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT'});
    }, []);

    return(
        <>
        <ul>
            {event.map((event) => 
                    <li key={event.id}>
                        
                        <h4>
                        {event.event_name}
                        <br/>
                        {event.address} {event.city}, {event.state} {event.zip_code}
                        <br/>
                        {event.date.slice(0, 10)}
                        <br/>
                        <br/>

                        </h4>

                    </li>)
            }
        </ul>
        </>
    )
}

export default Eventlist;