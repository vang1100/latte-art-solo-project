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


       <h3>CHATBOX</h3> 

        <ul>

            {/* if the chatbox length is not zero, then load */}
            {(chatbox.length !== 0) && chatbox.map((chatbox) =>
            
            <li key={chatbox.id}>
               <h4>{chatbox.username} posted on {(chatbox.date) ? chatbox.date.slice(0, 10) : 'YYYY/MM/DD'}</h4>
                                                {/* if there is date data, then slice or if there is not, add in this yyyymddd string */}
                <p>{chatbox.comment}</p>
                
            </li>)}
        </ul>
       
        </>

       
    )
}

export default Chatbox;