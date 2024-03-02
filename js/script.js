const boton = document.getElementById("get-pokemon");
const seleccion = document.getElementById("pokemon-select");

boton.addEventListener("click", function(){

    let pokemonActual = seleccion.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonActual}`)
        .then(response => response.json())
        .then(data => { 
           const filtroPok = data.results.filter(pokemon => ["charmander","bulbasaur","squirtle"].includes(pokemon.name));
           if(seleccion.value === "bulbasaur" || seleccion.value === "charmander" || seleccion.value === "squirtle") {
           pintarPok(seleccion.value);
            } else {
           console.log("Pokemon no encontrado");
           }
            return filtroPok
        })
        .catch(error => console.log ( 'Error no se puedo obtener los datos',error));
})

function pintarPok(pokemon){
    const contenedor = document.createElement("div")
    contenedor.classList.add("contenedor")
    const tarjetaPok = document.createElement("section")
    tarjetaPok.classList.add("tarjeta");
    tarjetaPok.innerHTML = `
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
              <p><b>Nombre: </b>${pokemon.name}</p>
              <p><b>Tipo:</b>${pokemon.type}</p>
              <p><b>Altura:</b>${pokemon.height}</p>
              <p><b>Peso:</b>${pokemon.weight}</p>`

    contenedor.appendChild(tarjetaPok)
    document.body.appendChild(contenedor)
};

