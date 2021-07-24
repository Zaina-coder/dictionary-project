import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import   "./Results"
export  default function Results(props){
     console.log(props.results)
     //results inside the Results property
     if (props.results) {
    return (
    <div className="Results">
      <section>

        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function(phonetic,index){
          return (<div key={index}>
            <Phonetic phonetic={phonetic} />
            </div>
            );
        })}
</section>
        
        {props.results.meanings.map(function(meaning,index){
          //meaning.definitions[0].definition;
            // we calling the propetry name results 
            //prop results has value  which is the state 
            //results. word or meaning which is in response.data
            //looping thru each meaning and .map that we get from the object word 
            // send that meaning to compenent meaning thru poerty
              return  (<section  key={index}>
                  <Meaning  meaning={meaning} />
                
                  </section>)
                
        })}

            </div>
    )
     }
     else {
         return null
     }
}