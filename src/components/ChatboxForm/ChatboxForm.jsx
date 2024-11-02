import {useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './Chatbox.css'

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
        <div className="align-item">
        
         <form onSubmit={handleSubmit}>
            
            <TextField 
                className="align-items"
                id="outlined-basic" 
                variant="outlined" 
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                sx={{ width: '300px', '& .MuiInputBase-root': { height: '80px' } }}
             />

             <br/>
             <br/>
            
             <TextField 
                id="outlined-basic" 
                label="LEAVE COMMENT HERE" 
                variant="outlined"
                value={comment}
                onChange={(event) => setComment(event.target.value)} 
                sx={{ width: '300px', '& .MuiInputBase-root': { height: '80px' } }}
            />
        <br/>
        <br/>
        <div >
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
      </Button> </div>
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
        </div>
    )
}

export default ChatboxForm;