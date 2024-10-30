import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Hello {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton/>
      <Link to='/homepage'><button>Go Home</button></Link>
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
