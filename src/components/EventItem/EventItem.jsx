import EditForm from "../EditForm/EditForm";
import { useState} from 'react';

function EventItem({event}){

  

    return(
        <>
          <li key={event.id}>
                        
                        <h4>
                        {event.event_name}
                        <br/>
                        {event.address} {event.city}, {event.state} {event.zip_code}
                        <br/>
                        {event.date.slice(0, 10)} 
                        <br/>
                        

                        </h4>

                    </li>
                    <EditForm/>
        </>
    )
}

export default EventItem;