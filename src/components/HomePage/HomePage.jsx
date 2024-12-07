import Eventlist from "../EventList/EventList";
import ChatButton from "../ChatButton/ChatButton";
import './HomePage.css';
import Logo from "../../Logo/Logo";
import HomePageButtons from "../../HomePageButtons/HomePageButtons";


function HomePage(){
    return(
        <div className="container1">

            <Logo/>
            <ChatButton/>
            <HomePageButtons/>
            <Eventlist/>
           
        
        </div>
       
    )
}

export default HomePage;