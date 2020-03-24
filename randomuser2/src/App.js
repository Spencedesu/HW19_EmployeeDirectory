import React, { useEffect, useState} from "react";
import axios from "axios";
import TableBody from "./components/TableBody";
import Form from "./components/Form";
import SearchForm from "./components/SearchForm";

  
function App() {
  const [personsState, setPersonsState] = useState([]);
  const [mainPersonsState, setMainPersonsState] = useState([]);

    // Axios get with setState example and state not explicitly declared
     useEffect(() => {
      axios.get(`https://randomuser.me/api/?results=200&nat=us`)
        .then(res => {
          console.log(res);
          const personsArr  = res.data.results;
          setPersonsState(personsArr);
          setMainPersonsState(personsArr);
        })
    }, [] );

    const handleInputChange = event => {
      const value = event.target.value;
      console.log(value);
      let filteredArr = [];
      filteredArr = mainPersonsState.filter((person, index) => {
        return person.name.first.toLowerCase().startsWith(value.toLowerCase());
      })
      console.log(filteredArr);
      setPersonsState(filteredArr);
    }     
    
     return (
       <div>
         <SearchForm props={{handleInputChange}} />
         <h1>There are {personsState.length} persons!</h1>

        <table border="1">
           <TableBody content={personsState} />
        </table>
        <Form />
       </div>   
     );
    
     }

export default App;  
