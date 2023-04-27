export let moviesList = null;

export const createElement = ({
  type,
  attrs,
  container = null,
  event = null,
  handler = null,
  position = 'append',
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key === 'innerHTML') el.innerHTML = attrs[key];
    else el.setAttribute(key, attrs[key]);
  });

  if (position === 'append') container.append(el);
  if (position === 'prepend') container.prepend(el);

  return el;
};

export const createStyle = () => {
  const headStyle = createElement({
    type: 'style',
    attrs: {
      innerHTML: `
      * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
    .container {
      width: min(100% - 40px, 1280px);
      margin-inline: auto;
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
    }
    .search {
      margin-bottom: 30px;
    }
    .search__label-input {
      display: block;
      margin-bottom: 7px;
    }
    .search__input {
      display: block;
      max-width: 400px;
      width: 100%;
      padding: 10px 15px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid lightslategray;
    }
    .search__label-checkbox {
      font-size: 0.75rem;
    }
    .search__group--checkbox {
      display: flex;
      gap: 5px;
      align-items: center;
    }`
    },
    container: document.head
  });
};

export const createMarkup = () => {
  //div.container
  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend',
  });

  //h1
  createElement({ type: 'h1', attrs: { innerHTML: 'App for a movie search' }, container });

  //div.search
  const searchBox = createElement({
    type: 'div',
    attrs: {
      class: 'search'
    },
    container
  });

  //div.search__group.search__group--input
  const inputBox = createElement({
    type: 'div',
    attrs: {
      class: "search__group search__group--input"
    },
    container: searchBox
  });

  //div.search__group.search__group--checkbox
  const checkBox = createElement({
    type: 'div',
    attrs: {
      class: "search__group search__group--checkbox"
    },
    container: searchBox
  });

  //label.search__label-input
  createElement({
    type: 'label',
    attrs: {
      for: "search",
      class: "search__label-input",
      innerHTML: 'Movie Search'
    },
    container: inputBox
  });

  //input.search__input
  createElement({
    type: 'input',
    attrs: {
      type: 'search',
      id: 'search',
      class: "search__input",
      placeholder: "Enter text here..."
    },
    container: inputBox
  });

  //checkbox.search__checkbox
  createElement({
    type: 'input',
    attrs: {
      type: 'checkbox',
      id: 'checkbox',
      class: "search__checkbox",
    },
    container: checkBox
  });

  //label.search__label-checkbox
  createElement({
    type: 'label',
    attrs: {
      for: "checkbox",
      class: "search__label-checkbox",
      innerHTML: 'Add a movie'
    },
    container: checkBox
  });

  //div.movies
  moviesList = createElement({ type: 'div', attrs: { class: 'movies' }, container});
};

export const addMoviesToList = (movie) => {
  const item = createElement({ type: 'div', attrs: { class: 'movie' }, container: moviesList });

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