import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';

function Chatbox(){
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding comment test', {comment}, {date}, {user});

        axios.post('/api/chatbox', {comment: comment, date: date, userId: user})
        .then((result) => {
            setComment('');
            setDate('');
            setUser('');
        })
        .catch((error) => {
            console.log('error in post chatbox', error);
        })
    };

  

//     const getChatbox = () => {
//         axios.get("/api/chatbox")
//         .then((response) => {
//             dispatch({
//                 type:"CHATBOX_SET",
//                 payload: response.data,
//             });
//         })
//         .catch((error) =>{
//         console.log('error in fetching chatbox data', error);
//     });
// };

useEffect(() => {
dispatch({ type: 'FETCH_CHATBOX'})
}, []);

    const chatbox = useSelector(store => store.chatboxReducer);

    return(
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

        CHATBOX

        <ul>
            {chatbox.map((chatbox) =>
            <li key={chatbox.id}>
                <h5>{chatbox.username}  {chatbox.date}</h5>
                <p>{chatbox.comment}</p>
                <br/>     
            </li>)}
        </ul>
       
        </>

       
    )
}

export default Chatbox;