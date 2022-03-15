const baseUrl = 'https://pokeapi.co/api/v2/';
let offset = 0;

function get( url) {
    return fetch(baseUrl + url)
    .then(result => {
        return result.json();
    })
}

function next() {
    document.querySelector('#pokemon').innerHTML = '';
    offset += 60;
    get('pokemon?offset=' + offset).then(res => showPokemonList(res.results));
}

get('pokemon/?limit=60&offset=' + offset).then( res => showPokemonList(res.results));

function showPokemonList(list){
    list.forEach(item  => {
        console.log(item.name);
        const li = document.createElement('li');
        li.innerHTML = item.name;
        document.querySelector('#pokemon').appendChild(li);
        get('pokemon/' + item.name).then( res => {
            const img = document.createElement('img');
            img.src = res.sprites.front_default;
            li.appendChild(img);
            li.addEventListener('click', () => showPokemon(res));
        })
    })
}

document.querySelector('button').addEventListener('click', () => {
    get('pokemon/' + document.querySelector('input').value).then(
        showPokemon
     )
});

function showPokemon(res) {
    document.querySelector('#pokemon').innerHTML = '';
    console.log(res);
    const li = document.createElement('li');
    document.querySelector('#pokemon').appendChild(li);
    const img = document.createElement('img');
    img.src = res.sprites.front_default;
    li.appendChild(img);

    const info = document.createElement('div');
    info.innerHTML = `
    <h2>${res.name}</h2>
    <p>weight: ${res.weight}</p>
    <p>height: ${res.height}</p>
    <p> id: ${res.id}</p>
    `;
    li.appendChild(info);
}

