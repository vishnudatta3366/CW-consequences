document.addEventListener("DOMContentLoaded", () =>{
  renderEverything();
})

function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemon();
}

function getDeleteBtn(){
    return document.querySelector('#delete-btn')
}


function fetchPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

const classNames = ['card-1', 'chard-2', 'card-3'];

function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div")


    pokeContainer.classList.add('ui', 'card', 'pokemon', classNames[Math.floor(Math.random() * classNames.length)]);

    createPokeImage(pokeData, pokeContainer);

    let pokeName = document.createElement('h4') 
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
    pokeNumber.classList.add('pokenumber');

    let pokeTypes = document.createElement('ul')
  

    createTypes(pokeData.types, pokeTypes)

    let pokeStat = document.createElement('div')
    pokeStat.classList.add('pokeStat');
    pokeStat.innerHTML = `
      <div class="h-stat">
        <div class="h-label">
          Height
        </div>
        <div>
          ${pokeData.height}
        </div>
      </div>
      <div class="splitter"></div>
      <div class="h-stat">
        <div class="h-label">
          EXP
        </div>
        <div>
          ${pokeData.base_experience}
        </div>
      </div>`

    pokeContainer.append(pokeName, pokeNumber, pokeTypes, pokeStat);
    allPokemonContainer.appendChild(pokeContainer);
}

function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeData, containerDiv){
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = pokeData.sprites.other.dream_world.front_default

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function deleteEverything(event){
    event.target.style = 'none';
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""

    let generateBtn = document.createElement('button')
    generateBtn.innerText = "Generate Pokemon"
    generateBtn.id = 'generate-pokemon'
    generateBtn.classList.add('ui', 'secondary', 'button')
    generateBtn.addEventListener('click', renderEverything);

    allPokemonContainer.append(generateBtn)
}