import Eventlist from "../EventList/EventList";
import EditForm from "../EditForm/EditForm";
function EditPage(){


    return(
        <>
        <h2>List of events</h2>
        <Eventlist />
        <button>EDIT</button> <button>DELETE</button>
        <h2>When edit button is clicked, it will toggle to an edit form</h2>
        <EditForm />
        
        </>
    )
}

export default EditPage;