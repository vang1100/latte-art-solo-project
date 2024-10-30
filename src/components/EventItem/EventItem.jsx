import EditForm from "../EditForm/EditForm";
import { useState} from 'react';

function EventItem({event}){

  

    return(
        <>
          <li key={event.id}>
                        
                        <h4>
                        {event.date ? event.date.slice(0, 10) : 'YYYY/MM/DD'} 
                            {event.event_name}
                            <br/>
                            {event.address} {event.city}, {event.state} {event.zip_code}
                            <br/>
                            
                            {event.time ? event.time.slice(1,5) : 'no time data'}
                            <br/>
                        </h4>

                    </li>
                    <EditForm/>
        </>
    )
}

export default EventItem;