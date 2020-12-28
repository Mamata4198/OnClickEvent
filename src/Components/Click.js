import React, { useState } from 'react'
import "./style.scss"
import "./Mouse"

     const Click = () =>{
         const purple ="#8e44ad";
         const [bg,setBg] = useState(purple);
         const [name,setName]=useState(" First Click Me 😍");

     
     const bgChange=()=> {
         let newBg="#34495e";
         setBg(newBg);
         setName("Double Click Me 🥰");

     };
     const bgBack = () =>
     {
         setBg(purple);
         setName("Thank you ✋ Now you click mouse event ");
     };
        return (
            <div style={{backgroundColor:bg}} className="a">
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button><br /><br />
            <a href="#Mouse" className="anchor">open Mouse event</a>
                
            </div>
        )
    
        }

export default Click
