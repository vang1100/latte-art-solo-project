import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

function EventListItem({event}){

    const dispatch = useDispatch();

    return(
        <>
          <li key={event.id}>
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                
                        <Typography gutterBottom variant="h5" component="div">
                            {event.event_name}
                        </Typography>
                        
                        <Typography gutterBottom variant="h6" component="div">
                        {event.time ? event.time.slice(1,5) : 'no time data'}PM
                        </Typography>

                    </Stack>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {event.address} {event.city}, {event.state} {event.zip_code}
                        <br/>
                        {event.date ? event.date.slice(0, 10) : 'YYYY/MM/DD'} 
                        </Typography>
                </Box>   
            </Card>
    <Link to='/edit'> 
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
    
    <Button 
         variant="contained"
         sx={{
           backgroundColor: '#E9967A',
           color: 'white',
           '&:hover': {
             backgroundColor: '#E8856A'
           }
         }}
        onClick={() => 
            dispatch
                ({type: 'DELETE_EVENT', payload: event.id})}>
        Delete
    </Button>
       
                        

            </li>
                    
        </>
    )
}

export default EventListItem;