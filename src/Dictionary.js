import React, {useState}from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results.js";

//we store value of searching inside state  beacue the value will change during the lifecyle of component

export default function Dictionary (props){
    let[keyword, setkeyword] = useState (props.defaultKeyword);
    // here's where the keyword typed 
    //when user submit the search text it will be store inside the state
    let [results,setResults]= useState(null);
    // we are using state to send whatever we get back from api , send info to component results (response.data[0])
    //store the definition of the word which typed by user and  update whenever the user change the word their searching for differnet word
   let [loaded, setLoaded]= useState (false);
   //this state is going to keep track of the component loading by default its false
     function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition.example);
        //adding data to fetch all the array  then [0] to dislpay the first item of the array
        setResults(response.data[0]);
     }
    function handleKeywordChange(event){
        console.log(event.target.value);
        setkeyword(event.target.value);
//value stored inside the state
    }
    function search (){
        //alert(`searching for ${keyword} definition`);
        //shows the value of the state
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //replace the world hello with whatever word ($keyword) the user type. 
        axios.get(apiUrl).then(handleResponse);
        
    }
    function handleSumbit (event){
        event.preventDefault();
        search();
        //
        

    }
    function load (){
        setLoaded(true);
        search();
        // change the state to true whcih will unload the page
        //call the search function (calling the api and the defaultkeyword)
    }
    if (loaded) {
        //if it's loaded show the whole form  and the result
    return (<div className="Dictionary"> 
    <section>
        <h1>
            What word do you want to look for ?
        </h1>
    <form onSubmit={handleSumbit} >
 <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
    </form>
    <div className="hint" >
        suggested keyword: sunset , forest 
    </div>
    </section>
    <Results results={results}/>
    </div>);

    } else {
        load();
        //else call the function load which is set to true and will show the form  with the default keyword
        return "loading"
    }
    
    
}