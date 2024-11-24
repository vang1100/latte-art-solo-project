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
      <h2>Hello, {user.username}!</h2>

      What can I help you with today? 
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
            onClick={() => {
              history.push('/login');
            }}>Home</Button></Link>
      <br/>
      <br/>
            <Link to='/chatbox'><Button variant="contained"
            sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}
            onClick={() => {
              history.push('/login');
            }}>Chat</Button></Link>
              <br/>
      <br/>
            <Link to='/edit'><Button variant="contained"
            sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}
            onClick={() => {
              history.push('/login');
            }}>Edit events</Button></Link>
              <br/>
      <br/>
            <Link to='/create'><Button variant="contained"
            sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}
            onClick={() => {
              history.push('/login');
            }}>Create events</Button></Link>
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
