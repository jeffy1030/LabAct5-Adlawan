$(document).ready(function(){

    fetch("pokedex.json")
        .then((rawData) => rawData.json())
        .then(pokedex => {

            let linkid = 0;

            pokedex.forEach(pokemon => {     

                let id = pokemon["id"];
                let name = pokemon["name"]["english"];
                let image = pokemon["image"]["hires"];
                let types = pokemon["type"];
                let typesHtml = "";

                types.forEach(type => {
                    typesHtml += `<span class="${type.toLowerCase()}">${type}</span> `;
                });
                
                $('.pokemon-container').append(
                    ` <div class="card">
                        <img src="${image}" alt="${name}">
                        <ul type="none">
                            <li class="pokemon-id">#ID: ${id}</li>
                            <li class="pokemon-name">
                                <a href="pokemon.html?id=${linkid++}">${name}</a>
                            </li>
                            <li class="pokemon-type">
                                ${typesHtml}
                            </li>
                        </ul>
                    </div>`
                )          
                
            });


        })
});