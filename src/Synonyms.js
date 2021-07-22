import React from "react";
export default function Synonyms (props){
    if(props.synonyms) {
 return ( 
 <ul className="synonyms">
     {props.synonyms.map(function(synonyms,index){
           return <li key={index}>{synonyms}</li>
           //calling the varible synonyms which we defined in meaing synonyms= {meaning.synonyms}
      }) 
       
     }
     </ul>
 );
    }
    else {
        return null ;
    }

}