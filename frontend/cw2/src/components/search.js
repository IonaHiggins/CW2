import React, {useState} from "react";
import DisplayTalks from "./displayTalks/displayTalks";

function Search({details}) {
    const[searchField,setSearchField] = useState("");
    const filtered = details.filter((entry) =>{
        return entry.title.toLowerCase().includes(searchField.toLowerCase())||entry.description.toLowerCase().includes(searchField.toLowerCase())||entry.speaker.toLowerCase().includes(searchField.toLowerCase())||entry.session.toLowerCase().includes(searchField.toLowerCase());
    });
    return(
        <div>
            <div>
                <input className = "form-control" type="text" placeholder="Search..." onChange={(e) => setSearchField(e.target.value)}/>
            </div>
            <DisplayTalks items={filtered}/>


        </div>
                
    )
}

export default Search;