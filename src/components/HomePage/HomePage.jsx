import Eventlist from "../EventList/EventList";
import Chatbox from "../Chatbox/Chatbox";
import ChatboxForm from "../ChatboxForm/ChatboxForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";

import Logo from "../../Logo/Logo";
import HomePageButtons from "../../HomePageButtons/HomePageButtons";

function HomePage(){
    return(
        <>
            <Logo/>
       
            <Eventlist/>

            <HomePageButtons/>

           
        
        </>
       
    )
}

export default HomePage;