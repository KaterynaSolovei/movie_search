let moviesList = null;

const createStyle = () => {
  const headStyle = document.createElement('style');
  headStyle.innerHTML = `
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.container {
  padding: 20px;
}
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.movie {
  display: flex;
  align-content: center;
  justify-content: center;
}
.movie__image {
  width: 100%;
  object-fit: cover;
}`;

  document.head.append(headStyle);
}

const createMarkup = () => {
  const container = document.createElement('div');
  const movies = document.createElement('div');

  container.setAttribute('class', 'container');
  movies.setAttribute('class', 'movies');

  container.append(movies);
  document.body.prepend(container);

  moviesList = document.querySelector('.movies');
};

const addMoviesToList = (movie) => {
  const item = document.createElement('div');
  const img = document.createElement('img');

  item.setAttribute('class', 'movie')
  img.setAttribute('class', 'movie__image')
  img.src = movie.Poster
  img.alt = `${movie.Title}, ${movie.Year}`
  img.title = `${movie.Title}, ${movie.Year}`

  item.append(img);
  moviesList.append(item);
  console.log(movie);
};

createStyle();
createMarkup();

const getData = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data.Search);

const search = 'Iron Man';

getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
  .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
  .catch((err) => console.log(err));

