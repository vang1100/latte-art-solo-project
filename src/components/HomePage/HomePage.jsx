import Eventlist from "../EventList/EventList";
import Chatbox from "../Chatbox/Chatbox";
import ChatboxForm from "../ChatboxForm/ChatboxForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";
import './HomePage.css';

function HomePage(){
    return(
        <>
        <div className="align-items">
      <img className="logo" src="logo.png" alt="Logo" />
    </div>
        
            <Eventlist/>
        <br/>
        <br/>
        <div className="align-items">
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

          </div>

            <ChatboxForm />
            <Chatbox />

           
        
        </>
       
    )
}

export default HomePage;