import React, {useState}from "react";
import "./Dictionary.css"
//we store value of searching inside state  beacue the value will change during the lifecyle of component

export default function Dictionary (){
    let[keyword, setkeyword] = useState("");
    // here's where the keyword typed 
    //when user submit the search text it will be store inside the state
    function handleKeywordChange(event){
        console.log(event.target.value);
        setkeyword(event.target.value);
//value stored inside the state
    }
    function search (event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
        //shows the value of the state

    }
    return (<div className="Dictionary"> 
    <form onSubmit={search} >
 <input type="search" onChange={handleKeywordChange} />
 


    
    </form>
   
    
    </div>);
}