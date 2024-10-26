import { useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';

function EditForm(){

    const dispatch = useDispatch();
    const event = useSelector(store => store.eventReducer);

    const [eventName, setEventName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    const makeEdit = (e) => {
        e.preventDefault();
        dispatch({type: 'EDIT_EVENT', payload: event.id})
    }

    return (
        <>
        <form onSubmit={makeEdit}>

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
        
        <button  type="submit">MAKE EDIT CHANGES</button>
        </form>

        </>
    )
}

export default EditForm;