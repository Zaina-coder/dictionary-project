import React from "react";
import "./Photos.css";
 export default function  Photos (props){
     if (props.photos) {
     return (
         <section className="Photos">
             <div className="row">
             {props.photos.map(function(photo,index){ 
                 console.log(props.photos)
                 return  (
                     <div className="col-4" key={index}>
                         <a href={photo.src.original} target="_blank"   rel="noreferrer" aria-hidden="true" > The original</a>  
                 <img src={photo.src.portrait}  className="img-fluid" alt="dictionarypic"/>
                 </div>
              );
             })}
         </div>
         </section>
     );
     }
     else {
         
        return  null ;
     }

 }