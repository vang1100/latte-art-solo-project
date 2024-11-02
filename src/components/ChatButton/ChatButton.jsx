import { Button } from "@mui/material";
import './ChatButton.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MapButton from "../MapButton/MapButton";
function ChatButton(){
    return (
<div className="align-item">
<br/>
<br/>
<Link to="/chatbox">


    <Button
            
            variant="contained"
            sx={{
            backgroundColor: '#c7a69b', // Lighter shade
            color: 'white',
            '&:hover': {
            backgroundColor: '#b89b88' // Slightly darker shade for hover effect
            }
        }}>
        CHAT
        </Button> 
        
 </Link>     
      </div>
    )
}

export default ChatButton;