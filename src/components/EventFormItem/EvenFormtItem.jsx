import EditForm from "../EditForm/EditForm";
import { useState} from 'react';

function EventFormItem({event}){

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(date);
      };

      const formatTime = (timeString) => {
        const [hourString, minute] = timeString.split(':');
        const hour = parseInt(hourString, 10);
        
        let ampm = 'AM';
        let formattedHour = hour;
      
        if (hour > 12) {
          formattedHour = hour - 12;
          ampm = 'PM';
        } else if (hour === 12) {
          ampm = 'PM';
        } else if (hour === 0) {
          formattedHour = 12;
        }
      
        return `${formattedHour}:${minute} ${ampm}`;
      };

    return(
        <>
          <li key={event.id}>
                        
                        <h4>
                            {formatDate(event.date)} at {formatTime(event.time)}
                            <br/>
                            {event.event_name}
                            <br/>
                            {event.address} {event.city}, {event.state} {event.zip_code}
                            <br/>
                            
                           
                            <br/>
                        </h4>

                    </li>
                    <EditForm event={event}/>
        </>
    )
}

export default EventFormItem;