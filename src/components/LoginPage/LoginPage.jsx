import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>

        <Button
          onClick={() => {
          history.push('/registration');}}
          variant="contained"
          sx={{
          backgroundColor: '#E9967A',
          color: 'white',
           '&:hover': {
             backgroundColor: '#E8856A'
           }
         }}>
          REGISTER-test
        </Button>
        
      </center>
    </div>
  );
}

export default LoginPage;
