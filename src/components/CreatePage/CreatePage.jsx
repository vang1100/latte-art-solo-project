import GoogleMap from "../GoogleMap/GoogleMap";
import CreateForm from "../CreateForm/CreateForm";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function CreatePage(){
    return(
        <>
        <GoogleMap />   
        <CreateForm />
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
                Go home
            </Button>
        </Link>
    
        </>
        
    )
}

export default CreatePage;