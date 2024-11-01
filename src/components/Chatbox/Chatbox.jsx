import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './Chatbox.css'


function Chatbox(){
    const chatbox = useSelector(store => store.chatboxReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_CHATBOX'});
        }, []);

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(date);
          };


    return(
        <>

        <ul>

            {/* if the chatbox length is not zero, then load */}
            {(chatbox.length !== 0) && chatbox.map((chatbox) =>
            
            <li key={chatbox.id} className="no-bullet">
               <h4>{chatbox.username} posted on {formatDate(chatbox.date)}</h4>
                                                {/* if there is date data, then slice or if there is not, add in this yyyymddd string */}
                <p>{chatbox.comment}</p>
                
            </li>)}
        </ul>
       
        </>

       
    )
}

export default Chatbox;