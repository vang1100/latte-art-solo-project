import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './Chatbox.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


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

        <div className="align-items">

            <Card variant="outlined" sx={{ maxWidth: 460 }}>

                <Box sx={{ p: 2 }}>

                    <Typography gutterBottom variant="h7" component="div">
        
                    <ul>

                        {/* if the chatbox length is not zero, then load */}
                        {(chatbox.length !== 0) && chatbox.map((chatbox) =>

                            <li key={chatbox.id} className="no-bullet">
                             
                             <span className="user-date"><h4>{chatbox.username} posted on {formatDate(chatbox.date)}</h4></span>
                               
                                    {/* if there is date data, then slice or if there is not, add in this yyyymddd string */}
                                <p>{chatbox.comment}</p>
    
                            </li>)}
                    </ul>

                    </Typography>
        
                </Box>

            </Card>

        </div>

       
    )
}

export default Chatbox;

