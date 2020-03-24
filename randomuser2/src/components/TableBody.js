import React from "react";

const TableBody = (props) => { 
//  console.log("in tablebody component");
//  console.log(props);
//    console.log(props.content.length + " People");
    
    return (
      <tbody>
      <tr>
        <td>Picture</td>
        <td>Name</td>
        <td>Gender</td>
        <td>Email</td>
        <td>Date-of-Birth</td>
      </tr>

      { props.content.map((person, index) => { 
        return (
          <tr key={index}>
            <td><img alt="" src={person.picture.thumbnail} /></td>
            <td>{person.name.first} {person.name.last}</td>
            <td>{person.gender}</td>
            <td>{person.email}</td>
            <td>{person.dob.date}</td>
           </tr>
          );
      })}
   </tbody> 
    ) 
  };

export default TableBody;