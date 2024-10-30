import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function MaterialUi(){
    return (

        <>
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography gutterBottom variant="h5" component="div">
              EVENT NAME GOES HERE
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            EVENT DESCRIPTION GOES HERE
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            BUTTONS?
          </Typography>

        </Box>
      </Card>

      -----------

      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '10ch' } }}
      noValidate
      autoComplete="off"
    >
        {/* <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="COMMENT" 
            variant="outlined"
            value={comment}
            onChange={(event) => setComment(event.target.value)} 
            />

            <TextField 
            id="outlined-basic" 
            variant="outlined" 
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
             />
        
        <button type="submit">Submit</button>
        </form> */}
      
        
    </Box>

    
    </>
    );
}

export default MaterialUi;