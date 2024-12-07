import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Edit } from '@mui/icons-material';
import './EventListItem.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";



function EventListItem({event}){

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
        // pareseIn treats the string as a decimal number
          // parseInt(14, 10) will return 14

        let ampm = 'AM';
        let formattedHour = hour; // 
      
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

   // console.log('parseIn test', parseInt(14, 10));

    return(
        <>
          <li key={event.id} className="no-bullet">
            {/* <Card variant="outlined" sx={{ maxWidth: 460 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                
                        <Typography gutterBottom variant="h5" component="div">
                            
                            {event.event_name} 

                            <Typography gutterBottom variant="h6" component="div">
                                
                                <Link to='/edit'>
                              
                                    <Edit sx={{ marginLeft: 'auto' }} />

                              </Link>
                            
                            </Typography>
                            
                            
                            
                        </Typography>

                       
                        
                        <Typography gutterBottom variant="h6" component="div">
                        
                        </Typography>

                    </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.address} {event.city}, {event.state} {event.zip_code}
                        <br/>
                       {formatDate(event.date)} at {formatTime(event.time)}
                        </Typography>
                </Box>   
            </Card> */}
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
             {event.event_name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <Link to='/edit'>
                              
                              <Edit sx={{ marginLeft: 'auto' }} />

                        </Link>
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {event.address} {event.city}, {event.state} {event.zip_code}
        <br/>             
        {formatDate(event.date)} at {formatTime(event.time)}
        </Typography>
      </Box>
      
    
    </Card>

            </li>
                    
        </>
    )
}

export default EventListItem;

 {/* <Link to='/edit'> 
        <Button 
              variant="outlined"
              sx={{
                color: '#E9967A',
                borderColor: '#E9967A',
                '&:hover': {
                  borderColor: '#E9967A',
                  backgroundColor: 'rgba(233, 150, 122, 0.04)'
                }
              }}>
                EDIT
        </Button>
    </Link>                  
     */}