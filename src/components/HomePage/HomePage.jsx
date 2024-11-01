import Eventlist from "../EventList/EventList";
import Chatbox from "../Chatbox/Chatbox";
import ChatboxForm from "../ChatboxForm/ChatboxForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";
function HomePage(){
    return(
        <>
        <img src="logo.png"/>
        
            <Eventlist/>
        <br/>
        <br/>
            <Link to='/create'>
            
              <Button 
                variant="contained"
                sx={{
                backgroundColor: '#E9967A',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#E8856A'
                }
              }}>
              CREATE AN EVENT
            </Button> 

            </Link>

            <Link to='/edit'>

              <Button 
                variant="contained"
                sx={{
                backgroundColor: '#E9967A',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#E8856A'
                }
              }}>
             EDIT AN EVENT
            </Button> 
          
          </Link>

            <ChatboxForm />
            <Chatbox />

           
        
        </>
       
    )
}

export default HomePage;