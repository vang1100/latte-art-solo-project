import Eventlist from "../EventList/EventList";
import Chatbox
 from "../Chatbox/Chatbox";
 import ChatboxForm from "../ChatboxForm/ChatboxForm";
function HomePage(){
    return(
        <>
        <h3>YOUR UPCOMING EVENTS!</h3> 
        <Eventlist/>
        <br/>
        <br/>
        <ChatboxForm />
        <Chatbox />
        
        </>
       
    )
}

export default HomePage;