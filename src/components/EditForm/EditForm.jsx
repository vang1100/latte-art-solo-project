import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Button } from '@mui/material';
import './EditForm.css';


function EditForm({event}){

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('event', event);
    // }, []);
    
    // const event = useSelector(store => store.eventReducer);


    ///** after fields are edited, it changes the order of the edit. how to stop that? */

    const [formData, setFormData] = useState({
        id: event.id,
        event_name: event.event_name,
        address: event.address,
        city: event.city,
        state: event.state,
        zip_code: event.zip_code,
        date: event.date.slice(0,10),
        time: event.time,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('typeof value', typeof value);
        console.log('value', value);
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const changeEvent = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_EVENT',
            payload: formData // contains the updated information for the event that's being edited.
        });
    };

    return (
        <div>

            <form  onSubmit={changeEvent}>
                
                <input
                    name="event_name"
                    placeholder="coffee shop name"
                    value={formData.event_name}
                    onChange={handleInputChange}
                />
                <input
                    name="address"
                    placeholder="address"
                    value={formData.address}
                    onChange={handleInputChange}
            
                />
    
                <input
                    name="city"
                    placeholder="city"
                    value={formData.city}
                    onChange={handleInputChange}
                />
                <input
                    name="state"
                    placeholder="state"
                    value={formData.state}
                    onChange={handleInputChange}
                />

                <input
                    name="zip_code"
                    placeholder="zipcode"
                    value={formData.zip_code}
                    onChange={handleInputChange}
                />
             
                <input
                    name="date"
                    placeholder="date of event"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />

                <br/>
                <input
                    name="time"
                    placeholder="time of event"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                />
       <br/>

                <Button 
                
                    type="submit"
                    variant="outlined"
                    sx={{
                    color: '#E9967A',
                    borderColor: '#E9967A',
                        '&:hover': {
                    borderColor: '#E9967A',
                    backgroundColor: 'rgba(233, 150, 122, 0.04)'
                        }
                    }}>
                        UPDATE
                </Button>        
                
                <Button 
                    variant="contained"
                    sx={{
                    backgroundColor: '#E9967A',
                    color: 'white',
                    '&:hover': 
                    {backgroundColor: '#E8856A'}
                        }}
                    onClick={() => 
                        dispatch
                            ({type: 'DELETE_EVENT', payload: event.id})}>
                            REMOVE
                </Button>
            
            </form>
        </div>
    );

    // const dispatch = useDispatch();

    // const event = useSelector(store => store.eventReducer);

    // const [eventName, setEventName] = useState('');
    // const [time, setTime] = useState('');
    // const [date, setDate] = useState('');
    // const [address, setAddress] = useState('');
    // const [city, setCity] = useState('');
    // const [state, setState] = useState('');
    // const [zipCode, setZipCode] = useState('');

    // const makeEdit = (e) => {
    //     e.preventDefault();
    //     dispatch({type: 'EDIT_EVENT', payload: event.id})
    // }

    // return (
    //     <>
        
    //     <form onSubmit={makeEdit}>

    //     <input placeholder="date of event" type="date" value={date} 
    //     onChange={(event) =>setDate(event.target.value)}></input>
       
    //     <input placeholder="time of event" type="time" value={time}
    //     onChange={(event) =>setTime(event.target.value)}></input>
      
    //     <input placeholder="coffee shop name" value={eventName}
    //     onChange={(event) =>setEventName(event.target.value)}></input>
       
    //     <input placeholder="address" value={address}
    //     onChange={(event) =>setAddress(event.target.value)}></input>
       
    //     <input placeholder="city" value={city}
    //     onChange={(event) =>setCity(event.target.value)}></input>
      
    //     <input placeholder="state" value={state}
    //     onChange={(event) =>setState(event.target.value)}></input>
      
    //     <input placeholder="zipcode" value={zipCode}
    //     onChange={(event) =>setZipCode(event.target.value)}></input>
        
    //     <button  type="submit">MAKE EDIT CHANGES</button>
    //     </form>

    //     </>
    // )
}

export default EditForm;