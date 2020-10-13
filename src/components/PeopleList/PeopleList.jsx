import React from "react";
import "./PeopleList.css";

const PeopleList = (props) => {
  return (
    <div>
      {
       props.people.map((person, index) => (
           <div key={index} className="grow" id="person_container">
               <img src={person.picture_link} width="150px" alt="person placeholder"/>
               <h2>{person.name}</h2>
               <a href={person.list_link} target="_blank" rel="noopener noreferrer">Open List</a>
           </div>
       ))   
        }
    </div>
  );
};

export default PeopleList;
