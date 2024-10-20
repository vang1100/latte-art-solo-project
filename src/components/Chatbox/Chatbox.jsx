import {useState} from 'react';
import axios from 'axios';

function Chatbox(){

    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding comment test');

        axios.post('/api/chatbox', {comment: comment, date: date})
        .then((result) => {
            setComment('');
            setDate('');
        })
        .catch((error) => {
            console.log('error in post chatbox', error);
        })
    };

    return(
        <>
        Chatbox form and chatbox data
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

        <h3>Comments will appear down here</h3>
       
        </>

       
    )
}

export default Chatbox;