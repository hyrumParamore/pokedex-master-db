
// Builds the Card for the webpage
function Card() {

  return (

    
    <main id="card-background" className="main-container">
        <div className="header">
            <p className="title">Basic Pokémon</p>
            <b><p id="update-name">Pikachu</p></b>
            <b><p className="hp"><span id="update-hp">HP 35</span></p></b>
        </div>
        
        <div className="image-box">
            <img className="bounce" id="update-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pokemon" srcset=""/>
        </div>

        <div className="abilities">
            <h3>Abilities/Moves:</h3>
            <li id="ability-1">Static</li>
            <li id="ability-2">Lightning-rod</li>
            <li id="ability-3">Mega-punch</li>
        </div>

        <div className="footer-section">
            <b><hr/>Type: </b><span id="update-type"> Electric</span>
            <b> | Height: </b><span id="update-height"> 0.4m</span>
            <b> | Weight: </b><span id="update-weight"> 60kg</span>
        </div>  
    </main>

  );
}

export default Card;
