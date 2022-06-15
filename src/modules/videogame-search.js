import { URL_base } from "./api-utilities.js";


/* Videogiochi */

export const videogameSearch = async (s) => { //ricerca generica con s
    let i = 1;
    let url = `${URL_base}s=${s}&type=game`;

    const response = await fetch(url);
    const results = await response.json();
    const games = results.Search;
    
    games.map ((game) =>{
        if(i<7){ //condizione creata ad hoc per la sezione videogiochi di 6 elementi, così da non creare errori
            secondFetch(game, i);
        }        
        i++;
    })
}

const secondFetch = async (item, indice) => { //fetch per cercare i giochi, ottenuti da una prima ricerca con s, tramite ID
    let url = `${URL_base}i=${item.imdbID}`;

    const response = await fetch(url);
    const result = await response.json();

    viewItemsVideogames(result, indice);
}

const viewItemsVideogames = (item, indice) => {
    const div_ID = `game-${indice}`;
    const title_ID = `game-title-${indice}`;
    const year_ID = `game-year-${indice}`;
    const genre_ID = `game-genre-${indice}`;
    replaceVideoGameContent(item,div_ID,title_ID,year_ID,genre_ID);
}

const replaceVideoGameContent = (item, div_ID, title_ID, year_ID, genre_ID) => {
    const div = document.getElementById(div_ID);
    const title_child = document.getElementById(title_ID);
    const year_child = document.getElementById(year_ID);
    const genre_child = document.getElementById(genre_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    const h4 = document.createElement("h4");
    const text2 = document.createTextNode(item.Year);
    h4.appendChild(text2);

    const p = document.createElement("p");
    const text3 = document.createTextNode(item.Genre);
    p.appendChild(text3);

    div.replaceChild(h3,title_child);
    div.replaceChild(h4,year_child);
    div.replaceChild(p,genre_child);
    div.style.backgroundImage = `url(${item.Poster})`;
}


export const videogameSearchById = async (game_ID,indice) => {
    let url = `${URL_base}i=${game_ID}`;
    let i = indice+1;

    const response = await fetch(url);
    const result = await response.json();

    viewItemsVideogames(result,i);
}