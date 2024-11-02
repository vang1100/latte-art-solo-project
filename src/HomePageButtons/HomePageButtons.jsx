import { Button } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HomePageButtons(){

    return (

        <div className="align-item">
   
    <Link to='/create'>
            
            <Button 
              variant="contained"
              sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}>
            CREATE AN EVENT
          </Button> 

    </Link>
        
    <Link to='/edit'>
        
            <Button
             
              variant="contained"
              sx={{
              backgroundColor: '#E9967A',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E8856A'
              }
            }}>
           EDIT AN EVENT
          </Button> 
        
    </Link>
    
        </div>

    )
   

   

}

export default HomePageButtons;