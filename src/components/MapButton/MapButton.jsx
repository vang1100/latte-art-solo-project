import { Button } from "@mui/material";
import './MapButton.css';

function MapButton() {
    return (
        <div className="align-item">
         <Button
            
            variant="contained"
            sx={{
            backgroundColor: '#c7a69b', // Lighter shade
            color: 'white',
            '&:hover': {
            backgroundColor: '#b89b88' // Slightly darker shade for hover effect
            }
        }}>
        MAP
        </Button> 
        </div>
    )
}

export default MapButton;