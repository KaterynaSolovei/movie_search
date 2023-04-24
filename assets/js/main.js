let moviesList = null;

const createElement = ({
  type,
  attrs,
  container = null,
  event = null,
  handler = null,
  position = 'append',
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    el.setAttribute(key, attrs[key]);
  });

  if (position === 'append') container.append(el);
  if (position === 'prepend') container.prepend(el);

  return el;
};

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
  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend',
  });

  createElement({
    type: 'div',
    attrs: { class: 'movies' },
    container,
  });

  moviesList = document.querySelector('.movies');
};

const addMoviesToList = (movie) => {
  const item = createElement({ type: 'div', attrs: { class: 'movie' },container: moviesList});

  const img = createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /^http|https:\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/img_not_available.png',
      alt: `${movie.Title}, ${movie.Year}`,
      title: `${movie.Title}, ${movie.Year}`,
    },
    container: item,
  });

};

createStyle();
createMarkup();

const getData = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data.Search);

const search = 'abd';

getData(`http://www.omdbapi.com/?apikey=18b8609f&s=${search}`)
  .then((movies) => movies.forEach((movie) => addMoviesToList(movie)))
  .catch((err) => console.log(err));