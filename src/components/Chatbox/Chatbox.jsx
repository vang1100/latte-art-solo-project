import { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './Chatbox.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChatboxForm from '../ChatboxForm/ChatboxForm';
import Logo from "../../Logo/Logo";
import HomePageButtons from "../../HomePageButtons/HomePageButtons";
import HomeButton from '../../HomeButton/HomeButton';

function Chatbox(){
    const chatbox = useSelector(store => store.chatboxReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_CHATBOX'});
        }, []);

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-US', {
            // these options arguments will give more customization
              year: 'numeric', // Display the year as a number (e.g., 2023)
              month: 'long', // Display the full name of the month (e.g., "January")
              day: 'numeric', // Display the day of the month as a number (e.g., 1)
            }).format(date);
          };

        // new Intl.DateTimeFormat('en-US') creates a formatter object.
          // will always need a specific locale and options.
          // The constructor alone doesn't produce a formatted date string.
          // will always need to call the .format()
          
        // .format() method actually performs the date formatting.


        //   const testDate = new Date();
        //   console.log('test date', testDate);
        //   console.log(new Intl.DateTimeFormat('en-US').format(testDate));
    return(

        <div className="container1">
            <Logo/>
            <HomeButton/>
            
            
            <br/>
            <ChatboxForm/>

            <br/>

            <div className="align-item">

            <Card variant="outlined" sx={{ maxWidth: 460 }}>

                <Box sx={{ p: 2 }}>

                    <Typography gutterBottom variant="h7" component="div">
        
                    <ul>

                        {/* if the chatbox length is not zero, then load */}
                        {(chatbox.length !== 0) && chatbox.map((chatbox) =>

                            <li key={chatbox.id}>
                             
                             <span className="user-date"><h4>{chatbox.username} posted on {formatDate(chatbox.date)}</h4></span>
                        
                                <p>{chatbox.comment}</p>
    
                            </li>)}
                    </ul>

                    </Typography>
        
                </Box>

            </Card>

        </div>
</div>
       
    )
}

export default Chatbox;

