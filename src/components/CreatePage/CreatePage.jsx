import GoogleMap from "../GoogleMap/GoogleMap";
import CreateForm from "../CreateForm/CreateForm";
import { Link } from 'react-router-dom';

function CreatePage(){
    return(
        <>
        <GoogleMap />   
        CREATE AN EVENT!
        <CreateForm />
        <Link to='/homepage'><button>Go home</button></Link>
        </>
        
    )
}

export default CreatePage;