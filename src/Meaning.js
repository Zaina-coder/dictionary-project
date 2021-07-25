import React from "react";
import  "./Meaning.css";
import Synonyms from "./Synonyms.js";

 export default function Meaning (props){
     //console.log(props.meaning);

     return (
         <div className="Meaning"> 
     <h3>{props.meaning.partOfSpeech}</h3>
     {props.meaning.definitions.map(function(meaning,index){
         return (<div key={index}>
            <div className="definition">
            {meaning.definition}
             </div>
              <div className="example">
            {meaning.example}
           </div>
            <Synonyms synonyms= {meaning.synonyms} />
          
             

             </div>
             )
     })}
     <p>
         {props.meaning.definitions[0].definition}
         {props.meaning.definitions[0].example}
     </p>
</div> );
 }