import {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

function ChatboxForm(){
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
  
  
    const handleSubmit = (event) => {
        event.preventDefault();
      //  console.log('adding comment test', {comment}, {date});

        axios.post('/api/chatbox', {comment: comment, date: date})
        .then((result) => {
            setComment('');
            setDate('');
            
            //how to fetch chatbox??
            dispatch({ type: 'FETCH_CHATBOX'});

            //how to add the user id?
        })
        .catch((error) => {
            console.log('error in post chatbox', error);
        })
    };
    return (
        <>
          SEND A MESSAGE TO YOUR FRIENDS!
       <form onSubmit={handleSubmit}>
        <input 
            placeholder="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
        >

        </input>

        <input 
            placeholder="date" 
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}>
        
        </input>

        <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default ChatboxForm;