import Eventlist from "../EventList/EventList";
import Chatbox
 from "../Chatbox/Chatbox";
function HomePage(){
    return(
        <>
         YOUR UPCOMING EVENTS!
        <Eventlist/>
        <br/>
        <br/>
        <br/>
        <Chatbox />
        </>
       
    )
}

export default HomePage;