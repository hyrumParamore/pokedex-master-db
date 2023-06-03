import React, {useState} from "react";
import populatePokemon from '../populate';

// This file contains the code needed to save the pokemon data to the database
// It also displays the search bar (header) onto the page.

function SaveData() {


    const [details, setDetails] = useState({
        name: '',
    })


    const PostData = async(e) => {
      
      if(document.getElementById('search_q').value === '') {
          alert("Please enter a card value before saving.")
          return

      } else {
          e.preventDefault()

          const {name} = details;
          
          const res = await fetch("https://pokedex-44cf4-default-rtdb.firebaseio.com/pokedexform.json",
          {
              method: 'POST',
              headers: {
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({
                  name,
              })
          })
      }
    }

    
  // Returns the header html and allows users to save what is searched.
  return (
    
    <header>
      {/* Search box */}
        <div className="top-container">
            <h1>- Pokémon Card Creator -</h1>

            <b className="text-muted">Search a Pokémon to create a custom card! <br></br></b>

            <div className="search-container">
              <input type="text" onChange={(e) =>
                setDetails({...details, name:e.target.value})} id="search_q" placeholder="Search Pokémon"/>
                
              <button onClick={ 
                  populatePokemon
              } className="btn-search" id="search-btn">
                <i className="search">Search</i>
              </button>
              
            </div>
        </div>
        <button onClick={PostData} className="btn-save" id="save-btn">
                <i className="search">Save Pokémon</i>
              </button>
    </header>

    
  );
}

export default SaveData;

