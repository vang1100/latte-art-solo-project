import {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function ChatboxForm(){
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
  
  
    const handleSubmit = (event) => {
        event.preventDefault();
      //  console.log('adding comment test', {comment}, {date});

        axios.post('/api/chatbox', {comment: comment, date: date})
        .then((result) => {
            setComment('');
            setDate('');
            
            //how to fetch chatbox??
            dispatch({ type: 'FETCH_CHATBOX'});

            //how to add the user id?
        })
        .catch((error) => {
            console.log('error in post chatbox', error);
        })
    };
    return (
        <>
         <h3>SEND A MESSAGE TO YOUR FRIENDS!</h3> 
         <form onSubmit={handleSubmit}>
            
            <TextField 
                id="outlined-basic" 
                variant="outlined" 
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
             />

             <br/>
            
             <TextField 
                id="outlined-basic" 
                label="COMMENT" 
                variant="outlined"
                value={comment}
                onChange={(event) => setComment(event.target.value)} 
                sx={{ width: '300px', '& .MuiInputBase-root': { height: '80px' } }}
            />
        <br/>
        <Button 
            
            type="submit"
            variant="outlined"
            sx={{
              color: '#E9967A',
              borderColor: '#E9967A',
              '&:hover': {
                borderColor: '#E9967A',
                backgroundColor: 'rgba(233, 150, 122, 0.04)'
              }
            }}>
              SUBMIT
      </Button> 
        </form>
        
       {/* <form onSubmit={handleSubmit}>
        <input 
            placeholder="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
        >

        </input>

        <input 
            placeholder="date" 
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}>
        
        </input>

        <button type="submit">Submit</button>
        </form> */}
        </>
    )
}

export default ChatboxForm;