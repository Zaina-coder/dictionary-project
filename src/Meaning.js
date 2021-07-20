import React from "react";
import  "./Meaning.css";
import Synonyms from "./Synonyms.js";

 export default function Meaning (props){
     console.log(props.meaning);

     return (
         <div className="Meaning"> 
     <h3>{props.meaning.partOfSpeech}</h3>
     {props.meaning.definitions.map(function(meaning,index){
         return (<div key={index}>
             <p>
            <strong>Definition</strong>{meaning.definition}
             <br/>
              <strong>Example</strong>
            <em>{meaning.example}</em> 
           
            <Synonyms synonyms= {meaning.synonyms} />
          
             </p>

             </div>
             )
     })}
     <p>
         {props.meaning.definitions[0].definition}
         {props.meaning.definitions[0].example}
     </p>
</div> );
 }