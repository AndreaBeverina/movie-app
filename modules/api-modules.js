import {URL_base} from "./config.js";

export const apiList = (s,type) => {
    const url = `${URL_base}s=${s}&type=${type}`;
    fetch(url)
    .then(response => response.json())
    .then(results => {
        const final_result = results.Search;
        console.log(final_result);
    })
}