//const que guarda la pokebola original contenida en pokebola-conatiner
const pokebolaOriginal= document.getElementById("pokebola-container").innerHTML;


function handlePokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151 + 1)) // Obtiene un Pokémon aleatorio, ponemos la url math random genera un numero del 0 a casi 1 lo multiplicamos por 151 que son los pokemonos que busca el API y le sumamos 1 porque math floor siempre rendondea hacia abajo entonces nos aseguramos que no de 0 como resultado y que llegue hasta 151 
    .then(response => response.json())
    .then(pokemon => {
        // Crear el contenido de la tarjeta
        const card = `
        <div id="card">
            <h2><strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></h2> 
            <div id="pokemon-img">
            <img id="pokeImg" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <div id="poke-wh">
            <p> Weight:${pokemon.weight/10}kg   Height:${pokemon.height/10}m</p>
            </div>
            <p><img src="./assets/rayo.png" alt="icon" height=20px><strong>Type:</strong> ${pokemon.types.map(type => type.type.name).join(', ') }</p>
            <p><img src="./assets/estrella.png" alt="icon" height=20px> <img src="./assets/estrella.png" alt="icon" height=20px><strong>Abilities:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p> 
             <div id=btn-card>
        <button id="btn-again">Try Again</button>
        </div>
        </div> `

        //El nombre del pokemon sale la primera letra en mayuscula 
        //El peso y la altura se hace la conversion a kg y m respectivamente
        //Se jala la imfo de todas las habilidades y tipo 
       

        
    
        // Insertar la tarjeta en el contenedor y al boton se le asigna la funcion de volver a la imagen de la pokebola
        document.getElementById("pokebola-container").innerHTML = card;

        document.getElementById("btn-again").addEventListener("click", volverPokebola);
    })
    .catch(error => console.error('Error al obtener datos', error));
};

function volverPokebola() {
    document.getElementById("pokebola-container").innerHTML= pokebolaOriginal;

    document.getElementById("pokebola").addEventListener("click", handlePokemon);
}

//Se asigna a la pokebola la funcion de mostrar la tarjeta 

document.getElementById("pokebola").addEventListener("click", handlePokemon);