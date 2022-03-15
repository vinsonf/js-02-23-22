const baseUrl = 'https://pokeapi.co/api/v2/';


function get( url) {
    return fetch(baseUrl + url)
    .then(result => {
        return result.json();
    })
}

get('pokemon').then( res => showPokemonList(res.results));

function showPokemonList(list){
    list.forEach(item  => {
        console.log(item.name);
        const li = document.createElement('li');
        li.innerHTML = item.name;
        document.body.appendChild(li);
        get('pokemon/' + item.name).then( res => {
            const img = document.createElement('img');
            img.src = res.sprites.front_default;
            li.appendChild(img);
        })
    })
}

