
// Populates the cards with the correct data from the Pokemon API.
function populatePokemon() {
    
    const search_result = document.getElementById('search_q');
    const search_term = search_result;
    // console.log(search_term.value.toLowerCase());

    const search_btn = document.getElementById('search-btn');
    const element = document.getElementById("card-background");

    // Capitalize the first letter of the sentence for the pokemon name on the card.
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // Check if the input is empty then do say so :)
    

    // api https://pokeapi.co/docs/v2/pokemon
    const getPokemonData = async term => {
            
        const url = `https://pokeapi.co/api/v2/pokemon/${term}`
        const response = await fetch(url)

        const pokemon = await response.json()
        
        const type = pokemon.types[0].type.name;
        changeCardColor();


        // Checks for the pokemon element type and changes the card background to match.
        function changeCardColor() {
            if (type == "fire"){
                console.log(type + "!");
                element.style.backgroundColor = "#dc6956";
            } else if (type == "water"){
                console.log(type + "!");
                element.style.backgroundColor = "#00b0eb";
            }
            else if (type == "grass"){
                console.log(type + "!");
                element.style.backgroundColor = "#73be06";
            }
            else if (type == "electric"){
                console.log(type + "!");
                element.style.backgroundColor = "#fbec00";
            }
            else if (type == "metal" || type == "steel"){
                console.log(type + "!");
                element.style.backgroundColor = "#94a8bb";
            }
            else if (type == "fighting" || type == "rock"){
                console.log(type + "!");
                element.style.backgroundColor = "#e3620e";
            }
            else if (type == "fairy"){
                console.log(type + "!");
                element.style.backgroundColor = "#f15191";
            }
            else if (type == "darkness"){
                console.log(type + "!");
                element.style.backgroundColor = "#104e6f";
            }
            else if (type == "psychic" || type == "poison"){
                console.log(type + "!");
                element.style.backgroundColor = "#a0358a";
            }
            else if (type == "flying"){
                console.log(type + "!");
                element.style.backgroundColor = "#a0358a";
            }
            else if (type == "normal"){
                console.log(type + "!");
                element.style.backgroundColor = "rgb(211, 211, 211)";
            }else {
                console.log(type + "!");
                element.style.backgroundColor = "rgb(211, 211, 211)";
            };  
        }

        // Pokemon Element Types and Colors.
            // Fairy f15191
            // Dark 104e6f
            // Metal 94a8bb
            // Leaf 73be06
            // Fighting e3620e
            // Electric fbec00
            // Water 00b0eb
            // Fire fa480c
            // Psychic a0358a


        const other_image = pokemon.sprites.other.dream_world.front_default;
        const pokemon_image = pokemon.sprites.other["official-artwork"].front_default;
        // console.log(pokemon.sprites)
        
        //Check if the image is null and use another image.
        if (pokemon_image != null) {
            document.getElementById('update-img').setAttribute('src', pokemon_image)
        } else {
            document.getElementById('update-img').setAttribute('src', other_image)
        }
        
        // Update card with data.
        // document.getElementById('update-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
        document.getElementById('update-name').innerHTML = capitalizeFirstLetter(pokemon.name);
        document.getElementById('update-hp').innerHTML = `HP ${pokemon.stats[0].base_stat}`;
        document.getElementById('update-type').innerHTML = capitalizeFirstLetter(`${pokemon.types[0].type.name}`)
        document.getElementById('ability-1').innerHTML = capitalizeFirstLetter(`${pokemon.abilities[0].ability.name}`)
        document.getElementById('ability-2').innerHTML = capitalizeFirstLetter(`${pokemon.abilities[1].ability.name}`)
        document.getElementById('ability-3').innerHTML = capitalizeFirstLetter(`${pokemon.moves[0].move.name}`)
        document.getElementById('update-weight').innerHTML = `${pokemon.weight}kg`
        document.getElementById('update-height').innerHTML = `0.${pokemon.height}m`

    }

    // search_btn.addEventListener('click', () => getPokemonData(search_term.value));
    var event = getPokemonData(search_term.value.toLowerCase());
    search_term.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            search_btn.click();
        }
    }); 
}

export default populatePokemon;