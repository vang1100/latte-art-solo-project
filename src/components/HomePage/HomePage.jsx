import Eventlist from "../EventList/EventList";
import Chatbox from "../Chatbox/Chatbox";
import ChatboxForm from "../ChatboxForm/ChatboxForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function HomePage(){
    return(
        <>
        <h3>YOUR UPCOMING EVENTS!</h3> 
            <Eventlist/>
        <br/>
        <br/>
            <Link to='/create'>
                <button>CREATE AN EVENT</button>
            </Link>

            <ChatboxForm />

            <Chatbox />
        
        </>
       
    )
}

export default HomePage;