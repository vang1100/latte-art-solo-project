import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CreateForm(){

   // const eventList = useSelector(store => store.eventReducer);

    const [eventName, setEventName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [ address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState(0);
    

    const addEvent = (event) => {
        event.preventDefault();
        console.log('add event')

        axios.post('/api/event', {eventName:eventName, address:address, city:city, 
            state:state, zipCode:zipCode, date:date, time:time })
        .then((result) => {
            setEventName('');
            setAddress('');
            setCity('');
            setState('');
            setZipCode('');
            setDate('');
            setTime('');
            
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
      
        <input placeholder="coffee shop name" type ="text" value={eventName}
        onChange={(event) =>setEventName(event.target.value)}></input>
       
        <input placeholder="address" type="text" value={address}
        onChange={(event) =>setAddress(event.target.value)}></input>
       
        <input placeholder="city" type="text" value={city}
        onChange={(event) =>setCity(event.target.value)}></input>
      
        <input placeholder="state" type="text" value={state}
        onChange={(event) =>setState(event.target.value)}></input>
      
        <input placeholder="zipcode" type="number" value={zipCode}
        onChange={(event) =>setZipCode(event.target.value)}></input>
        
        <button type="submit">MAKE CHANGES</button>
        </form>
        </>
    )
}

export default CreateForm;