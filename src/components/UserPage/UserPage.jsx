import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';
import Logo from "../../Logo/Logo";


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div align="center">
      <Logo/>
      <h3>Hello, {user.username}!</h3>
           
            <Link to='/chatbox'><Button variant="contained"
            sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}
            >Chat</Button></Link>
             <br/>
             <br/>
        <Link to='/homepage'><Button variant="contained"
            sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}
            >Events</Button></Link>
              <br/>
      <br/>
            
      <LogOutButton/>
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
