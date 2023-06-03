import PokemonList from "./getDbData";

function ShowPokemon() {

    // Creates elements that contain the Pokemon names
    // and then displays them.
    function ShowList() {
        const item = PokemonList();
        console.log(item);
        const ulElement = document.getElementById('ul-element');

        item.forEach(element => {
            const newElement = document.createElement('li');
            newElement.innerHTML = element.name;
            console.log(element)
            ulElement.appendChild(newElement);
        });
    }

    ShowList()

    // Returns the button and the ul container for the pokemon list.
    return (
        <div className="pokemon-list">
            <button className="btn-save" onClick={ShowList}>Show Saved Pokémon</button>  
            <ul id="ul-element">
                {/* Pokemon names will populate this section */}
            </ul>
        </div>
        );
    
}

// Exports the ShowPokemon function
export default ShowPokemon;