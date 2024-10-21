function CreateForm(){

    const addEvent = () => {
        console.log('add event')
    }
    return (
        <>
        <form onSubmit={addEvent}>
        
        <input placeholder="date of event" type="calendar"></input>
        <input placeholder="time of event" type="time"></input>
        <input placeholder="coffee shop name"></input>
        <input placeholder="address"></input>
        <input placeholder="city"></input>
        <input placeholder="state"></input>
        <input placeholder="zipcode"></input>
        
        <button type="submit">MAKE CHANGES</button>
        </form>
        </>
    )
}

export default CreateForm;