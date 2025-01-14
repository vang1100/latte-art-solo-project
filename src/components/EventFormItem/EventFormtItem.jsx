import EditForm from "../EditForm/EditForm";
import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";
import './EventFormItem.css'


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
        
         <br/>
              <li key={event.id} className="no-bullet">
            <Card variant="outlined" sx={{ maxWidth: 460 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                
                        <Typography gutterBottom variant="h5" component="div">
                            {event.event_name}
                        </Typography>
                        
                        <Typography gutterBottom variant="h6" component="div">
                        
                        </Typography>

                    </Stack>
                    
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.address} {event.city}, {event.state} {event.zip_code}
                        <br/>
                       {formatDate(event.date)} at {formatTime(event.time)}
                        </Typography>

                    <Divider>

                    </Divider>

                    <Stack>
                         <EditForm event={event}/>   
                    </Stack>

                </Box>   

            </Card>
            
            </li>
            <br/>
            

        </>
    )
}

export default EventFormItem;