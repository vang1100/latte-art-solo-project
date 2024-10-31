import { useState } from 'react';
import axios from 'axios';

function CreateForm(){

   // const eventList = useSelector(store => store.eventReducer);

    const [eventName, setEventName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    

    const addEvent = (event) => {
        event.preventDefault();
        console.log('add event');

        axios.post('/api/event', {event_name:eventName, address:address, city:city, 
            state:state, zip_code:zipCode, date:date, time:time })
        .then((result) => {
            setEventName('');
            setAddress('');
            setCity('');
            setState('');
            setZipCode('');
            setDate('');
            setTime('');
            //user id??
            
        })
        .catch((error) => {
            console.log('failed in post event', error)
        })
    };

    return (
        <>
        <form onSubmit={addEvent}>
        
        <input placeholder="date of event" type="date" value={date} 
        onChange={(event) =>setDate(event.target.value)}></input>
       
        <input placeholder="time of event" type="time" value={time}
        onChange={(event) =>setTime(event.target.value)}></input>
      
        <input placeholder="coffee shop name" value={eventName}
        onChange={(event) =>setEventName(event.target.value)}></input>
       
        <input placeholder="address" value={address}
        onChange={(event) =>setAddress(event.target.value)}></input>
       
        <input placeholder="city" value={city}
        onChange={(event) =>setCity(event.target.value)}></input>
      
        <input placeholder="state" value={state}
        onChange={(event) =>setState(event.target.value)}></input>
      
        <input placeholder="zipcode" value={zipCode}
        onChange={(event) =>setZipCode(event.target.value)}></input>
        
        <button type="submit">CREATE</button>
        </form>
        </>
    )
}

export default CreateForm;