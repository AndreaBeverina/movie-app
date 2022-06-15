import { URL_base } from "./api-utilities.js";


/* Serie TV */

export const serieSearch = async (t, type,indice) => {
    let url = `${URL_base}t=${t}&type=${type}`;

    const response = await fetch(url);
    const result = await response.json();

    viewItemsSerie(result,indice);
}

const viewItemsSerie = (item,indice) => {
    const rowID_1 = `row-titolo-${indice+1}`;
    const title_ID = `serie-titolo-${indice+1}`;
    replaceSerieTitle(item,rowID_1,title_ID);

    const rowID_2 = `row-anno-${indice+1}`;
    const year_ID = `serie-anno-${indice+1}`;
    replaceSerieYear(item,rowID_2,year_ID);

    const rowID_3 = `row-plot-${indice+1}`;
    const plot_ID = `serie-plot-${indice+1}`;
    replaceSeriePlot(item,rowID_3,plot_ID);

    const poster_ID = `poster-${indice+1}`;
    replaceSeriePoster(item,poster_ID);
}

const replaceSerieTitle = (serie, rowID, titleID) => {
    const row = document.getElementById(rowID);
    const title_child = document.getElementById(titleID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(serie.Title);
    h3.appendChild(text);

    row.replaceChild(h3,title_child);
}

const replaceSerieYear = (serie, rowID, yearID) => {
    const row = document.getElementById(rowID);
    const year_child = document.getElementById(yearID);

    const h4 = document.createElement("h4");
    const text = document.createTextNode(serie.Year);
    h4.appendChild(text);

    row.replaceChild(h4,year_child);
}

const replaceSeriePlot = (serie, rowID, plotID) => {
    const row = document.getElementById(rowID);
    const plot_child = document.getElementById(plotID);

    const p = document.createElement("p");
    const text = document.createTextNode(serie.Plot);
    p.appendChild(text);

    row.replaceChild(p,plot_child);
}

const replaceSeriePoster = (serie,posterID) => {
    const div = document.getElementById(posterID);
    div.style.backgroundImage = `url(${serie.Poster})`;
}