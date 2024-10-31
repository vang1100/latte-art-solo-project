import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <Button
        variant="contained"
        sx={{
          backgroundColor: '#E9967A',
          color: 'white',
          '&:hover': {
            backgroundColor: '#E8856A'
          }
        }}
        onClick={() => {
          history.push('/login');
        }}>
          Login
        </Button>
        {/* <button
          variant="contained"
          sx={{
            backgroundColor: '#E9967A',
            color: 'white',
            '&:hover': {
              backgroundColor: '#E8856A'
            }
          }}
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button> */}
      </center>
    </div>
  );
}

export default RegisterPage;
