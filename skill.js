import React from 'react';
import { v4 as uuid } from "uuid";

 function Skill(props) {
    const {name, imageUrl, starsTotal, starsActive}=props.skill;
   const starslist=[];
   for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starslist.push(
        <span key={uuid()} className="text-info">
          ★
        </span>
      );
    } else {
      starslist.push(<span key={uuid()}>★</span>);
    }
   }
    return (
      <div>
        <img 
          className="rounded-circle "
          src={imageUrl} 
          alt={name}
          style={{width: "100px", height: "100px"}}
        />
        <div>{starslist}</div>
     </div>
    );
}

export default Skill;