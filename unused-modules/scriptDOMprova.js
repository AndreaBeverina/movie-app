        const movieDiv = document.getElementById("movieList");
        

        const apikey = "7a628d44";
        const URL_base = `https://www.omdbapi.com/?apikey=${apikey}&`;


        export const apiList = (s,type) => {
        const url = `${URL_base}s=${s}&type=${type}`;
        fetch(url)
        .then(response => response.json())
        .then(results => {
            const final_result = results.Search;
            viewItems(final_result);
            })
        }

        const viewItems = (items) => {
            items.map((item) => {
                const paragraph = createFilmParagraph(item);
                movieDiv.appendChild(paragraph);
            })
        }

        const createFilmParagraph = (movie) => {
            const para = document.createElement("p");
            const text = document.createTextNode(movie.Title);
            para.appendChild(text);
            
            return para;
        }