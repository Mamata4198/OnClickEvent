import React, {useState} from 'react'
import "./style.scss"

const Mouse = () => {
    const purple ="#8e44ad";
    const [bg,setBg] = useState(purple);
    const [name,setName]=useState("Hello 😍");
    const bgChange=()=> {
        let newBg="#34495e";
        setBg(newBg);
        setName("How are you? 🥰");

    };
    const bgBack = () =>
    {
        setBg(purple);
        setName("Happy New Year 🤝 ");
    };
    return (
        <div style={{backgroundColor:bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            
        </div>
    )
}

export default Mouse
