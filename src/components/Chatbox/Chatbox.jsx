import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch} from 'react-redux';

function Chatbox(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CHATBOX'})
        }, []);

    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('adding comment test', {comment}, {date});

        axios.post('/api/chatbox', {comment: comment, date: date})
        .then((result) => {
            setComment('');
            setDate('');
            setUser('');
            //how to fetch chatbox??
            //how to add the user id?
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
               <h4>{chatbox.username} on {chatbox.date.slice(0, 10)}</h4> 
                <p>{chatbox.comment}</p>
                
            </li>)}
        </ul>
       
        </>

       
    )
}

export default Chatbox;