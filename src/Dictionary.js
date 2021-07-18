import React, {useState}from "react";
import "./Dictionary.css"
import axios from "axios";

//we store value of searching inside state  beacue the value will change during the lifecyle of component

export default function Dictionary (){
    let[keyword, setkeyword] = useState("");
   
    // here's where the keyword typed 
    //when user submit the search text it will be store inside the state
     function handleResponse(response) {
        console.log(response.data[0]);
        //adding data to fetch all the array  then [0] to dislpay the first item of the array
     }
    function handleKeywordChange(event){
        console.log(event.target.value);
        setkeyword(event.target.value);
//value stored inside the state
    }
    function search (event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
        //shows the value of the state
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //replace the world hello with whatever word ($keyword) the user type. 
        axios.get(apiUrl).then(handleResponse);

    }
    return (<div className="Dictionary"> 
    <form onSubmit={search} >
 <input type="search" onChange={handleKeywordChange} />
 


    
    </form>
   
    
    </div>);
}