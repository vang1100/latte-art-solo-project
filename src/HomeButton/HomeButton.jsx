import './HomeButton.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function HomeButton(){
   return(
    <div className="align-item">
         <Link to='/homepage'>
            <Button 
                variant="contained"
                sx={{
                backgroundColor: '#c7a69b', // Lighter shade
                color: 'white',
                '&:hover': {
                backgroundColor: '#b89b88' // Slightly darker shade for hover effect
                }
            }}
            >
                HOME
            </Button>
        </Link>
    </div>
   )
}

export default HomeButton;