import { moviesList, createElement, createStyle, createMarkup, addMoviesToList } from "./dom.js";

const getData = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data.Search);

const search = 'Superman';

getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
  .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
  .catch((err) => console.log(err));

 export const appInit = () => {
    createStyle();
    createMarkup();
  };