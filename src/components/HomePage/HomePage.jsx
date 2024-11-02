import Eventlist from "../EventList/EventList";
import Chatbox from "../Chatbox/Chatbox";
import ChatboxForm from "../ChatboxForm/ChatboxForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";
import './HomePage.css';
import Logo from "../../Logo/Logo";
import HomePageButtons from "../../HomePageButtons/HomePageButtons";

function HomePage(){
    return(
        <div className="container1">

            <Logo/>
       
            <Eventlist/>

            <HomePageButtons/>

           
        
        </div>
       
    )
}

export default HomePage;