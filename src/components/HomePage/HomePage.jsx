import Eventlist from "../EventList/EventList";
import Chatbox
 from "../Chatbox/Chatbox";
 import ChatboxForm from "../ChatboxForm/ChatboxForm";
function HomePage(){
    return(
        <>
         YOUR UPCOMING EVENTS!
        <Eventlist/>
        <br/>
        <br/>
        <br/>
        <Chatbox />
        <ChatboxForm />
        </>
       
    )
}

export default HomePage;