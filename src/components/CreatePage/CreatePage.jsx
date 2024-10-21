import GoogleMap from "../GoogleMap/GoogleMap";
import CreateForm from "../CreateForm/CreateForm";

function CreatePage(){
    return(
        <>
        <GoogleMap />   
        CREATE AN EVENT!
        <CreateForm />
        </>
    )
}

export default CreatePage;