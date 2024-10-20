function EditForm(){

    const editEvent = (event) => {
        event.preventDefault();
        console.log('PUT to edit form');
    };

    //DELETE FUNCTION

    
    return (
        <>
        <form onSubmit={editEvent}>
        
        <input placeholder="coffee shop name"></input>
        <input placeholder="date of event" type="calendar"></input>
        <input placeholder="time of event" type="time"></input>
        <input placeholder="address"></input>
        <input placeholder="city"></input>
        <input placeholder="state"></input>
        <input placeholder="zipcode"></input>
        
        <button type="submit">MAKE CHANGES</button>
        </form>

        </>
    )
}

export default EditForm;