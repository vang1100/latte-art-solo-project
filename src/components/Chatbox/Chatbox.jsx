import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';


function Chatbox(){
    const chatbox = useSelector(store => store.chatboxReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_CHATBOX'});
        }, []);




    return(
        <>


        CHATBOX

        <ul>
            {(chatbox.length !== 0) && chatbox.map((chatbox) =>
            
            <li key={chatbox.id}>
               <h4>{chatbox.username} posted on {(chatbox.date) ? chatbox.date.slice(0, 10) : 'YYYY/MM/DD'}</h4>
                <p>{chatbox.comment}</p>
                
            </li>)}
        </ul>
       
        </>

       
    )
}

export default Chatbox;