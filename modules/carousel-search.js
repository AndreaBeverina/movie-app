import { URL_base } from "./api-utilities.js";


/* Carousel usando la ricerca con S */

export const carouselSearch = async (s) => {
    let url = `${URL_base}s=${s}`;

    const response = await fetch(url);
    const results = await response.json();

    viewItemsCarousel(results.Search);        
}

const viewItemsCarousel = (items) => {
    let i = 1;
    items.map((item) => {
        let div_ID = `car-item-${i}`;
        let title_ID = `car-title-${i}`;
        let img_ID = `car-img-${i}`;

        if(i<5){ //condizione creata ad hoc per il carosello di 4 elementi, così da non creare errori
            replaceCarouselContent(item,div_ID,title_ID,img_ID,i);
        }
        
        i++;
    })
}

const replaceCarouselContent = (item, divider_ID, title_ID,img_ID,i) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    searchPlotByTitle(item.Title,divider_ID,i);

    div.replaceChild(h3,title_child);

    document.getElementById(img_ID).src=`${item.Poster}`;
}

const searchPlotByTitle = (title,divider_ID,indice) => {  
    const stringa = createSearchableString(title);
    let url = `${URL_base}t=${stringa}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            viewItemsPlot(result,divider_ID,indice);
        });
}

const viewItemsPlot = (item,divider_ID,indice) => {
    let plot_ID = `car-plot-${indice}`;
    replaceCarPlot(item, divider_ID, plot_ID);
}

const replaceCarPlot = (item, divider_ID, plot_ID) => {
    const div = document.getElementById(divider_ID);
    const plot_child = document.getElementById(plot_ID);

    const p = document.createElement("p");
    const text2 = document.createTextNode(item.Plot);
    p.appendChild(text2);

    div.replaceChild(p,plot_child);
}

const createSearchableString = (title) => {
    const stringa = title.replace(/\s/g, '%20');
    return stringa;
}





/* Carousel usando la ricera con T */

export const carouselSearch_t = async (t, indice, type) => {
    let url = `${URL_base}t=${t}&type=${type}`;

    const response = await fetch(url);
    const result = await response.json();

    viewItemsCarousel_t(result,indice);
}

const viewItemsCarousel_t = (item,indice) => {
    let i = indice+1;
    let div_ID = `car-item-${i}`;
    let title_ID = `car-title-${i}`;        
    let plot_ID = `car-plot-${i}`;
    let img_ID = `car-img-${i}`;

    replaceCarouselContent_t(item,div_ID,title_ID,plot_ID,img_ID);
}

const replaceCarouselContent_t = (item, divider_ID, title_ID, plot_ID, img_ID) => {
    const div = document.getElementById(divider_ID);
    const title_child = document.getElementById(title_ID);
    const plot_child = document.getElementById(plot_ID);

    const h3 = document.createElement("h3");
    const text = document.createTextNode(item.Title);
    h3.appendChild(text);

    const p = document.createElement("p");
    const text2 = document.createTextNode(item.Plot);
    p.appendChild(text2);

    div.replaceChild(h3,title_child);
    div.replaceChild(p,plot_child);

    document.getElementById(img_ID).src=`${item.Poster}`;
}