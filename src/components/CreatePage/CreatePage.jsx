import GoogleMap from "../GoogleMap/GoogleMap";
import CreateForm from "../CreateForm/CreateForm";
import HomeButton from '../../HomeButton/HomeButton';
import Logo from '../../Logo/Logo';
import './CreatePage.css';


function CreatePage(){
    return(
        <div>
        <Logo/>
        <HomeButton/>
        <GoogleMap />   
        <CreateForm />
        
        
    
        </div>
        
    )
}

export default CreatePage;