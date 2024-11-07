import { useState } from "react";

function ThankYou(){

    const [toggle, setToggle] = useState(true);

    const handleChange = () => {
       // console.log('toggle thank you')
        return setToggle(!toggle);
      }

    return (
        
           
                
        <div> 
            <center>
                 <h1>T e c h n o l o g i e s :</h1> 

                   
                       
                        React ||
                        Postgres ||
                        Material UI ||
                        Node ||
                        Express ||
                        Google maps Api ||
                        Javascript ||
                        Heroku
                   
                   <br/>
                   <br/>
                   <br/>
            
        
                <h2><button onClick={handleChange}> {toggle ? '☕️☕️☕️' : <img src="thankyou.jpg" />}</button></h2>
            </center>
        </div>
           
      
    )
}

export default ThankYou;